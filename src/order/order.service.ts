import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OrderDto } from '../repository/orders/dto/order.dto';
import { IOrder } from '../repository/orders/interface/order.interface';

const ignoredList = {
  __v: 0,
  email: 0,
  phone: 0,
  message: 0,
  social: 0,
  delivery_method: 0,
  delivery_city: 0,
  delivery_address: 0,
  delivery_date: 0,
  delivery_time: 0,
};

const genOrderID = () =>
  Array(8)
    .fill(null)
    .map(() => Math.round(Math.random() * 10).toString(10))
    .join('');

@Injectable()
export class OrderService {
  constructor(@InjectModel('Orders') private orderModel: Model<IOrder>) {}

  async create(clientOrder: OrderDto) {
    const orderID = genOrderID();

    await new this.orderModel({ ...clientOrder, orderID }).save();
    return { status: HttpStatus.OK, orderID };
  }

  async findOne(orderID: string) {
    const order = await this.orderModel.findOne({ orderID }, ignoredList);
    const order_summary = Number(order.delivery_summary) + Number(order.order_summary);
    return { order_summary, orderID, created_at: order.created_at };
  }
}
