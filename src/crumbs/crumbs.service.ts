import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from '../category/interfaces/Category.interfaces';
import { defaultCrumbs } from '../crumbsConfig/crumbsDefault';
import { Product } from '../product/interfaces/product.inteface';

@Injectable()
export class CrumbsService {
  constructor(
    @InjectModel('Product') private productModel: Model<Product>,
    @InjectModel('Category') private readonly categoryModel: Model<Category>,
  ) {}

  async createCatalogCrumbs() {
    return [...defaultCrumbs];
  }
  async createCategoryCrumbs(key: string) {
    const { name } = await this.categoryModel.findOne({ key });
    return [
      ...defaultCrumbs,
      { path: `/catalog/category/${key}`, title: name },
    ];
  }
  async createProductCrumbsByPrefix(prefix) {
    console.log(prefix);
    try {
      const { name, key } = await this.productModel.findOne({ prefix });
      const prevCrumbs = await this.createCategoryCrumbs(key);
      return [...prevCrumbs, { path: `/product/${prefix}`, title: name }];
    } catch {
      return [...defaultCrumbs];
    }
  }

  async createProductCrumbsById(prefix: string, _id: number) {
    const { name } = await this.productModel.findById({ _id });
    const prevCrumbs = await this.createProductCrumbsByPrefix(prefix);
    return [...prevCrumbs, { path: `product/${prefix}/${_id}`, title: name }];
  }
}
