import { Module } from '@nestjs/common';
import { CatalogModule } from '../catalog/catalog.module';
import { CategoryModule } from '../category/category.module';
import { DatabaseModule } from '../database/database.module';
import { ProductModule } from '../product/product.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [CategoryModule, DatabaseModule, CatalogModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
