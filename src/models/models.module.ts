import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategorySchema } from '../category/shema/category.shema';
import { ProductSchema } from '../product/shema/product.shema';
import { ModelsService } from './models.service';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: 'Product', schema: ProductSchema }],
      'product',
    ),
    MongooseModule.forFeature(
      [{ name: 'Category', schema: CategorySchema }],
      'category',
    ),
  ],
  providers: [ModelsService],
  exports: [ModelsService],
})
export class ModelsModule {}