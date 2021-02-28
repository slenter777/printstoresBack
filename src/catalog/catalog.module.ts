import { Module } from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { CatalogController } from './catalog.controller';
import { ProductsConnect } from '../repository/products/connect/products.connect';
import { categoryConnect } from '../repository/category/connect/category.collection.connect';

@Module({
  imports: [
    ProductsConnect,
    categoryConnect,
  ],
  providers: [CatalogService],
  controllers: [CatalogController],
  exports: [CatalogService],
})
export class CatalogModule {}
