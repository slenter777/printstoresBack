import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from '../category/interfaces/Category.interfaces';
import { Product } from '../product/interfaces/product.inteface';

@Injectable()
export class ModelsService {
  constructor(
    @InjectModel('Product') private productModel: Model<Product>,
    @InjectModel('Category') private categoryModel: Model<Category>,
  ) {}

  getProductModel() {
    return this.productModel;
  }

  getCategoryModel() {
    return this.categoryModel;
  }
}
