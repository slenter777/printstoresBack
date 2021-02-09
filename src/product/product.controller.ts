import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { ProductDto } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post('create')
  async create(@Body() product: ProductDto) {
    return this.productService.create(product);
  }

  @Get(':prefix/:id')
  async getProduct(@Param() { prefix, id }) {
    console.log(prefix, id);
    return this.productService.findById(id, prefix);
  }

  @Get('prefix')
  async getProductByKey(@Query('prefix') prefix) {
    console.log(prefix, 'prefix');
    const products = await this.productService.findByPrefix(prefix);
    return { products, status: HttpStatus.OK };
  }

  @Get('filter')
  async getProductFilter(
    @Query('currentPage') currentPage,
    @Query('pageSize') pageSize,
  ) {
    console.log(currentPage, pageSize, 'zapros');
    return this.productService.filterProducts(
      Number(currentPage),
      Number(pageSize),
    );
  }

  @Get('all')
  async getAllProducts() {
    const products = await this.productService.allProducts();
    return { products, status: HttpStatus.OK };
  }
}
