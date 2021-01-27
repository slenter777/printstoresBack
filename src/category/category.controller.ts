import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import CategoryDto, { CategoryDeleteDto } from './dto/category.dto';

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

  @Delete('delete')
  async deleteCategory(@Body() data: CategoryDeleteDto[]) {
    const result = await this.categoryService.deleteCategory(data);
    return result;
  }

  @Post('/create')
  async createCategory(@Body() data: CategoryDto) {
    return await this.categoryService.create(data);
  }
}
