import { HttpStatus } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { ModelsService } from '../models/models.service';
import { ReviewsDto } from '../repository/reviews/dto/reviews.dto';

import fetch from 'node-fetch';

const ignoredList = { __v: 0 };

const validScore = 0.5;

enum RECAPTCHA {
  SECRET_KEY = '6LeirWEaAAAAAOcowIbk2AK6WoNGRpO5hMcAEKIr',
}

@Injectable()
export class ReviewsService {
  private reviewsModel = this.modelsService.getReviewsModel();
  constructor(private modelsService: ModelsService) {}

  async create(clientReviews: ReviewsDto) {
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA.SECRET_KEY}&response=${clientReviews.recaptcha_key}`;
    let valid = false;

    const response = await fetch(url, { method: 'post' });
    const data = await response.json();
    valid = data.success && data.score >= validScore;

    if (valid) {
      console.log(valid);
      await new this.reviewsModel(clientReviews).save();
    }

    return { status: HttpStatus.OK, recaptcha_validate: valid };
  }

  async getReviews(params) {
    const pageSize = params.pageSize || 20;
    const page = params.page || 1;

    const reviews = await this.reviewsModel
      .find({}, ignoredList)
      .sort({ created_at: -1 })
      .skip(+pageSize * (page - 1))
      .limit(pageSize);
    return reviews;
  }
}
