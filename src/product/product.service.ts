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
    const products = await this.productModel.find({ prefix });
    return products;
  }
  async findById(_id: number, key: string) {
    const products = await this.productModel.find({ _id }).exec();
    return {
      products,
    };
  }
  async deleteById(_id: number) {
    const products = await this.productModel.deleteOne({ _id });
    return {
      products,
    };
  }
  async allProducts() {
    const products = await this.productModel.find();
    return products;
  }

  async filterProducts(currentPage: number, pageSize: number) {
    const products = await this.productModel
      .find()
      .skip(pageSize * (currentPage - 1))
      .limit(pageSize);
    const total = await this.productModel.find();
    return { products, total: total.length };
  }
}
