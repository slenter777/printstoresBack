import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from '../product/interfaces/product.inteface';

@Injectable()
export class CatalogService {
  constructor(@InjectModel('Product') private productModel: Model<Product>) {}

  async sortProductsAndFilterText({
    filterText,
    sortBy,
    direction,
    pageSize,
    currentPage,
  }) {
    this.productModel.createIndexes({ name: 'text' });
    const total = await this.productModel.find({
      $text: { $search: filterText },
    });
    const orderBy = direction === 'ASC' ? 1 : -1;
    const products = await this.productModel
      .find({ name: { $regex: filterText } })
      .sort({ [sortBy]: orderBy })
      .skip(parseInt(pageSize) * (parseInt(currentPage) - 1))
      .limit(parseInt(pageSize));
    return {
      products,
      total: total.length,
      searchParams: { filterText, pageSize, currentPage, direction, sortBy },
    };
  }

  async sortProducts({ filterText, sortBy, direction, pageSize, currentPage }) {
    const orderBy = direction === 'ASC' ? 1 : -1;
    const total = await this.productModel.countDocuments({});
    const products = await this.productModel
      .find()
      .sort({ [sortBy]: orderBy })
      .skip(parseInt(pageSize) * (parseInt(currentPage) - 1))
      .limit(parseInt(pageSize));
    return {
      products,
      total,
      searchParams: { filterText, pageSize, currentPage, direction, sortBy },
    };
  }

  async filterProductsByText({
    filterText,
    pageSize,
    currentPage,
    direction,
    sortBy,
  }) {
    this.productModel.createIndexes({ name: 'text' });
    const total = await this.productModel.find({
      $text: { $search: `/.*${filterText}.*/` },
    });

    const products = await this.productModel
      .find({ name: { $regex: filterText } })
      .skip(parseInt(pageSize) * (parseInt(currentPage) - 1))
      .limit(parseInt(pageSize));
    return {
      products,
      total: total.length,
      searchParams: { filterText, pageSize, currentPage, direction, sortBy },
    };
  }

  async filterProductsByPagination({
    filterText,
    pageSize,
    currentPage,
    direction,
    sortBy,
  }) {
    const total = await this.productModel.countDocuments({});
    const products = await this.productModel
      .find()
      .skip(parseInt(pageSize) * (parseInt(currentPage) - 1))
      .limit(parseInt(pageSize));
    return {
      products,
      total,
      searchParams: { filterText, pageSize, currentPage, direction, sortBy },
    };
  }
}
