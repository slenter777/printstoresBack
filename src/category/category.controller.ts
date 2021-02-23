import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import CategoryDto, { CategoryDeleteDto } from './dto/category.dto';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}
  @Post()
  async getPayment(@Req() req, @Body() body) {
    console.log('test', body);
  }
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

  @Post('create')
  async createCategory(@Body() data: CategoryDto) {
    console.log(data);
    return await this.categoryService.create(data);
  }
}
