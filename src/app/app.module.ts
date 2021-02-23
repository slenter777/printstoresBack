import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { CatalogModule } from '../catalog/catalog.module';
import { CategoryModule } from '../category/category.module';
import { Config } from '../config/config.module';
import { DatabaseModule } from '../database/database.module';
import { OrderModule } from '../order/order.module';
import { ProductModule } from '../product/product.module';
import { ReviewsModule } from '../reviews/reviews.module';
import { UploadModule } from '../upload/upload.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    CategoryModule,
    DatabaseModule,
    CatalogModule,
    ProductModule,
    UploadModule,
    ReviewsModule,
    OrderModule,
    Config,
    MulterModule.register({
      dest: './uploads',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
