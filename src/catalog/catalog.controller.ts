import { Controller, Get, Query } from '@nestjs/common';
import { CatalogService } from './catalog.service';

@Controller('catalog')
export class CatalogController {
  constructor(private catalogService: CatalogService) {}

  @Get()
  async findAll(
    @Query('pageSize') pageSize,
    @Query('page') page,
    @Query('filterText') filterText,
    @Query('sortBy') sortBy,
    @Query('direction') direction,
  ) {
    const params = { pageSize, page, sortBy, filterText, direction };
    return this.catalogService.findAll(params);
  }

  @Get('list')
  async catalogListFilter(
    @Query('filter') filter,
    @Query('pageSize') pageSize,
    @Query('page') page,
    @Query('filterText') filterText,
    @Query('sortBy') sortBy,
    @Query('direction') direction,
  ) {
    const params = { pageSize, page, sortBy, filterText, direction, filter };
    return this.catalogService.findAndFilter(params);
  }
}
