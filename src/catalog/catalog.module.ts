import { Module } from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { CatalogController } from './catalog.controller';
import { CategoryModule } from '../category/category.module';

@Module({
  imports: [CategoryModule],
  providers: [CatalogService],
  controllers: [CatalogController],
})
export class CatalogModule {}
