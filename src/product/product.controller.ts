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

  @Get(':prefix/:id')
  async getProduct(@Param() { prefix, id }) {
    console.log(id, 'id');
    return await this.productService.findById(id, prefix);
  }

  @Get(':prefix')
  async getProductByKey(@Param() { prefix }) {
    console.log(prefix, 'prefix');
    return await this.productService.findByPrefix(prefix);
  }
}
