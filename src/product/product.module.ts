import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ProductSchema } from './shema/product.shema';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: 'Product', schema: ProductSchema }],
      'product',
    ),
  ],
  controllers: [ProductController],
  providers: [ProductService],
  exports: [ProductService],
})
export class ProductModule {}
