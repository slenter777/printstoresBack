import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductService } from '../product/product.service';
import { CategoryService } from './category.service';
import CategoryDto from './dto/category.dto';

@Controller('category')
export class CategoryController {
  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
  ) {}
  @Get('all')
  async getAllCategory() {
    return await this.categoryService.getAllCategory();
  }
  @Get(':key')
  async getCategoryByKey(@Param() { key }) {
    return await this.productService.findByKey(key);
  }
  @Post('/create')
  async createCategory(@Body() data: CategoryDto) {
    return await this.categoryService.create(data);
  }
}
