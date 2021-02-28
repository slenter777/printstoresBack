import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ModelsService } from './models.service';
import { ReviewsSchema } from '../repository/reviews/schema/reviews.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Reviews', schema: ReviewsSchema }], 'reviews')],
  providers: [ModelsService],
  exports: [ModelsService],
})
export class ModelsModule {}
