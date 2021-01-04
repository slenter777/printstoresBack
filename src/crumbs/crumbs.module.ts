import { Module } from '@nestjs/common';
import { CrumbsService } from './crumbs.service';
import { CrumbsController } from './crumbs.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from '../product/shema/product.shema';
import { CategorySchema } from '../category/shema/category.shema';

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
  providers: [CrumbsService],
  controllers: [CrumbsController],
  exports: [CrumbsService],
})
export class CrumbsModule {}
