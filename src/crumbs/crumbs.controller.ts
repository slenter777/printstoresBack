import { Controller, Get, Post, Query } from '@nestjs/common';
import { CrumbsService } from './crumbs.service';

@Controller('crumbs')
export class CrumbsController {
  constructor(private crumbsService: CrumbsService) {}
  @Get()
  async getCrubmsConfig(
    @Query('key') key: string,
    @Query('prefix') prefix: string,
    @Query('id') id: number,
  ) {
    return this.crumbsService.getCrumbs(key, prefix, id);
  }
}
