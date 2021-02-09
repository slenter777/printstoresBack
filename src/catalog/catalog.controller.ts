import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Query,
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
    @Query('pageSize') pageSize = 8,
    @Query('currentPage') currentPage = 1,
    @Query('filterText') filterText,
    @Query('sortBy') sortBy,
    @Query('direction') direction = 'ASC',
  ) {
    const params = { pageSize, currentPage, sortBy, filterText, direction };
    if (filterText && sortBy) {
      return this.catalogService.sortProductsAndFilterText(params);
    }

    if (!filterText && sortBy) {
      return this.catalogService.sortProducts(params);
    }

    if (filterText) {
      return this.catalogService.filterProductsByText(params);
    }

    return this.catalogService.filterProductsByPagination(params);
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
