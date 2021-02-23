import { Body, Controller, Get, Post, Res, Query } from '@nestjs/common';
import { OrderDto } from '../models/repository/orders/dto/order.dto';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Post()
  async createOrder(@Body() orderDto: OrderDto) {
    return this.orderService.create(orderDto);
  }

  @Get()
  async getOneOrder(@Query('orderID') orderID) {
    return this.orderService.findOne(orderID);
  }

  @Get('list')
  async getOrderList() {}
}
