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

@Injectable()
export class CatalogService {
  constructor(private productService: ProductsService) {}

  async findAndFilter(filterParams: IFilterParams) {
    const sortBy = filterParams.sortBy || 'name';
    const direction = filterParams.direction || 'ASC';
    const pageSize = filterParams.pageSize || 24;
    const page = filterParams.page || 1;
    const filterText = filterParams.filterText || '';
    const orderBy = direction === 'ASC' ? 1 : -1;
    const categoryID = filterParams.filter.category || '';

    const params = { sortBy, direction, pageSize, page, filterText, orderBy, categoryID };

    return this.productService.filterByRelatedCategory(params);
  }

  async findAll(filterParams: AllProductsFilterParams) {
    const sortBy = filterParams.sortBy || 'name';
    const direction = filterParams.direction || 'ASC';
    const pageSize = filterParams.pageSize || 24;
    const page = filterParams.page || 1;
    const filterText = filterParams.filterText || '';
    const orderBy = direction === 'ASC' ? 1 : -1;

    const params = { sortBy, direction, pageSize, page, filterText, orderBy };

    return this.productService.findAll(params);
  }
}
