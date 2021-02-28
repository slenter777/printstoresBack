import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { categoryConnect } from '../repository/category/connect/category.collection.connect';

@Module({
  imports: [categoryConnect],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
