import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from '../product/interfaces/product.inteface';

@Injectable()
export class CatalogService {
  constructor(@InjectModel('Product') private productModel: Model<Product>) {}

  async filterAndSort(params) {
    this.productModel.createIndexes({ name: 'text' });

    const sortBy = params.sortBy || 'name';
    const direction = params.direction || 'ASC';
    const pageSize = params.pageSize || 24;
    const currentPage = params.currentPage || 1;
    const filterText = params.filterText || '';
    const orderBy = direction === 'ASC' ? 1 : -1;
    const searchParams = {
      filterText,
      pageSize,
      currentPage,
      direction,
      sortBy,
    };

    if (filterText.length < 3) {
      const total = await this.productModel.find();
      const products = await this.productModel
        .find()
        .sort({ [sortBy]: orderBy })
        .skip(+pageSize * (currentPage - 1))
        .limit(+pageSize);

      return {
        total: total.length,
        products,
        searchParams,
      };
    }

    const total = await this.productModel.find({
      $text: { $search: filterText },
    });

    const products = await this.productModel
      .find({ name: { $regex: filterText } })
      .sort({ [sortBy]: orderBy })
      .skip(parseInt(pageSize) * (parseInt(currentPage) - 1))
      .limit(parseInt(pageSize));
    return {
      products,
      total: total.length,
      searchParams,
    };
  }
}
