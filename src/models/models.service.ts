import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ModelsType } from './interface/model.interface';
import { ReviewsModel } from '../repository/reviews/interface/reviews.interface';

@Injectable()
export class ModelsService {
  constructor(@InjectModel('Reviews') private reviewsModel: Model<ReviewsModel>) {}

  getReviewsModel() {
    return this.reviewsModel;
  }
}
