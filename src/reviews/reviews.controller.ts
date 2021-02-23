import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { ReviewsService } from './reviews.service';

@Controller('reviews')
export class ReviewsController {
  constructor(private reviewsService: ReviewsService) {}

  @Post('create')
  async createReviews(@Body() body) {
    return this.reviewsService.create(body);
  }

  @Get('list')
  async findReviews() {
    return this.reviewsService.getReviews({ page: 1 });
  }

  @Delete()
  async deleteReviews() {}
}
