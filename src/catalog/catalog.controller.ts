import { Body, Controller, Get } from '@nestjs/common';
import { CategoryService } from '../category/category.service';

@Controller('catalog')
export class CatalogController {
  constructor(private categoryServise: CategoryService) {}

  @Get('all')
  async allCategory() {
    return await this.categoryServise.getAllCategory();
  }
}
