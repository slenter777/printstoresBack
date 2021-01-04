import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CategoryService } from '../category/category.service';
import { CrumbsService } from '../crumbs/crumbs.service';
import { defaultCrumbs } from '../crumbsConfig/crumbsDefault';
import { ProductDto } from './dto/product.dto';
import { Product } from './interfaces/product.inteface';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product') private productModel: Model<Product>,
    private crumbsService: CrumbsService,
  ) {}

  async create(productDto: ProductDto) {
    await new this.productModel(productDto).save();
    return { success: 'ok' };
  }

  async findByPrefix(prefix: string) {
    const itemsList = await this.productModel.find({ prefix });
    const crumbs = await this.crumbsService.createProductCrumbsByPrefix(prefix);
    return {
      crumbs,
      itemsList,
    };
  }
  async findById(_id: number, key: string) {
    console.log(key, 'key');
    const itemsList = await this.productModel.find({ _id }).exec();
    const crumbs = await this.crumbsService.createProductCrumbsById(key, _id);
    return {
      crumbs,
      itemsList,
    };
  }
  async deleteById(_id: number) {
    return await this.productModel.deleteOne({ _id });
  }
}
