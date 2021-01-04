import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import CategoryDto from './dto/category.dto';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}
  @Get('all')
  async getAllCategory() {
    return await this.categoryService.getAllCategory();
  }
  @Get(':key')
  async getCategoryByKey(@Param() { key }) {
    return await this.categoryService.findByKey(key);
  }
  @Post('/create')
  async createCategory(@Body() data: CategoryDto) {
    return await this.categoryService.create(data);
  }
}
