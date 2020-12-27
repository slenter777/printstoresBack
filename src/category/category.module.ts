import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CategorySchema } from './shema/category.shema';
import { ProductModule } from '../product/product.module';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: 'Category', schema: CategorySchema }],
      'category',
    ),
    ProductModule,
  ],
  providers: [CategoryService],
  controllers: [CategoryController],
  exports: [CategoryService],
})
export class CategoryModule {}
