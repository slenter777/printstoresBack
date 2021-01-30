import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CategorySchema } from './shema/category.shema';
import { CrumbsModule } from '../crumbs/crumbs.module';
import { ProductSchema } from '../product/shema/product.shema';
import { ModelsModule } from '../models/models.module';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: 'Category', schema: CategorySchema }],
      'category',
    ),
    MongooseModule.forFeature(
      [{ name: 'Product', schema: ProductSchema }],
      'product',
    ),
    CrumbsModule,
    ModelsModule,
  ],
  providers: [CategoryService],
  controllers: [CategoryController],
  exports: [CategoryService],
})
export class CategoryModule {}
