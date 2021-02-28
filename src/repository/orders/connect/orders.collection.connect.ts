import { MongooseModule } from '@nestjs/mongoose';
import { OrderSchema } from '../schema/order.schema';

export const ordersConnection = MongooseModule.forFeature([{ name: 'Orders', schema: OrderSchema }], 'orders');
