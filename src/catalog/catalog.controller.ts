import { Body, Controller, Get, Param } from '@nestjs/common';
import { CategoryService } from '../category/category.service';

@Controller('catalog')
export class CatalogController {
  constructor(private categoryServise: CategoryService) {}

  @Get('all')
  async allCategory() {
    return await this.categoryServise.getAllCategory();
  }

  @Get('type/:type')
  async getCategoryByType(@Param('type') type:string) {

  }

  @Get('view/:type')
  async getCategoryByView(@Param('type') type:string) {

  }

  @Get('group/:type')
  async getCategoryByGroup(@Param('type') type:string){
  }
}
