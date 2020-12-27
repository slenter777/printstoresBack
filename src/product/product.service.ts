import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductDto } from './dto/product.dto';
import { Product } from './interfaces/product.inteface';

@Injectable()
export class ProductService {
  constructor(@InjectModel('Product') private productModel: Model<Product>) {}

  async create(productDto: ProductDto) {
    await new this.productModel(productDto).save();
    return { success: 'ok' };
  }

  async findByKey(key: string) {
    return await this.productModel.find({ key });
  }
  async findByPrefix(prefix: string) {
    return await this.productModel.find({ prefix });
  }

  async findById(_id: number) {
    return await this.productModel.findById({ _id });
  }
}
