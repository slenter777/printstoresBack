import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { ProductsService } from '../products/products.service';
import { CategoryDocument } from '../repository/category/schema/category.schema';

interface IFilterParams {
  filter?: { category: string };
  page?: number;
  filterText?: string;
  sortBy?: string;
  direction?: string;
  pageSize?: number;
}

type AllProductsFilterParams = Omit<IFilterParams, 'filter'>;

const getFilterParams = (params: IFilterParams) => {
  const sortBy = params?.sortBy || 'name';
  const direction = params?.direction || 'ASC';
  const pageSize = params?.pageSize || 24;
  const page = params?.page || 1;
  const filterText = params?.filterText || '';
  const orderBy = direction === 'ASC' ? 1 : -1;
  const categoryID = params?.filter?.category || '';

  return { sortBy, page, pageSize, filterText, orderBy, categoryID };
};

@Injectable()
export class CatalogService {
  constructor(private productService: ProductsService) {}

  async findAndFilter(filterParams: IFilterParams) {
    const { categoryID, filterText, page, pageSize, sortBy, orderBy } = getFilterParams(filterParams);
    let findBy;

    if (filterText.length > 3) {
      findBy = { related_products: categoryID, title: { $regex: filterText } };
    } else {
      findBy = { related_products: categoryID };
    }

    const params = { sortBy, pageSize, page, findBy, orderBy };

    return this.productService.filterByRelatedCategory(params);
  }

  async findAll(filterParams: AllProductsFilterParams) {
    const { filterText, page, pageSize, sortBy, orderBy } = getFilterParams(filterParams);

    let findBy = {};

    if (filterText.length > 3) {
      findBy = { title: { $regex: filterText } };
    }
    const params = { sortBy, pageSize, page, orderBy, findBy };
    return this.productService.findAll(params);
  }
}
