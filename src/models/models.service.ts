import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from '../category/interfaces/Category.interfaces';
import { Product } from '../product/interfaces/product.inteface';
import { ModelsType } from './interface/model.interface';
import { ReviewsModel } from './repository/reviews/interface/reviews.interface';

@Injectable()
export class ModelsService {
  constructor(
    @InjectModel('Product') private productModel: Model<Product>,
    @InjectModel('Category') private categoryModel: Model<Category>,
    @InjectModel('Reviews') private reviewsModel: Model<ReviewsModel>,
  ) {}

  getModel(model: ModelsType) {
    return this[model];
  }

  getProductModel() {
    return this.productModel;
  }

  getCategoryModel() {
    return this.categoryModel;
  }

  getReviewsModel() {
    return this.reviewsModel;
  }
}
