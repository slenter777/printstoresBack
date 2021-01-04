import { Controller, Post } from '@nestjs/common';

@Controller('crumbs')
export class CrumbsController {
  constructor() {}
  @Post()
  async crumbsInfo() {}
}
