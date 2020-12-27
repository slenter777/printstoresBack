import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductDto } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post('create')
  async create(@Body() product: ProductDto) {
    return await this.productService.create(product);
  }

  @Get(':key/:id')
  async getProduct(@Param() { id }) {
    return await this.productService.findById(id);
  }

  @Get(':key')
  async getProductByKey(@Param() { key }) {
    console.log(key);
    return await this.productService.findByKey(key);
  }
}
