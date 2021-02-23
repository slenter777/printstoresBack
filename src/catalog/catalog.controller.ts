import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  Req,
} from '@nestjs/common';
import { CategoryService } from '../category/category.service';
import { CatalogService } from './catalog.service';

@Controller('catalog')
export class CatalogController {
  constructor(
    private categoryServise: CategoryService,
    private catalogService: CatalogService,
  ) {}

  @Get('all')
  async allCategory() {
    return await this.categoryServise.getAllCategory();
  }

  @Get('filter')
  async catalogFilter(
    @Query('pageSize') pageSize,
    @Query('currentPage') currentPage,
    @Query('filterText') filterText,
    @Query('sortBy') sortBy,
    @Query('direction') direction,
  ) {
    const params = { pageSize, currentPage, sortBy, filterText, direction };
    return this.catalogService.filterAndSort(params);
  }

  @Get('type/:categoryType')
  async getCategoryByType(
    @Param('categoryType') categoryType: string,
    @Query() query,
  ) {}

  @Get('view/:category')
  async getCategoryByView(@Param('category') category: string, @Query() query) {
    console.log(category, 'type');
  }

  @Get('group/:categoryGroup')
  async getCategoryByGroup(
    @Param('categoryGroup') categoryGroup: string,
    @Query() query,
  ) {}
}
