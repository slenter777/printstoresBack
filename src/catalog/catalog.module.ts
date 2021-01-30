import { Module } from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { CatalogController } from './catalog.controller';
import { CategoryModule } from '../category/category.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from '../product/shema/product.shema';
@Module({
  imports: [
    CategoryModule,
    MongooseModule.forFeature(
      [{ name: 'Product', schema: ProductSchema }],
      'product',
    ),
  ],
  providers: [CatalogService],
  controllers: [CatalogController],
  exports: [CatalogService],
})
export class CatalogModule {}
