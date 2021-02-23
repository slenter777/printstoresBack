import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { ordersConnection } from '../models/repository/orders/connect/orders.collection.connect';

@Module({
  imports: [ordersConnection],
  providers: [OrderService],
  controllers: [OrderController],
})
export class OrderModule {}
