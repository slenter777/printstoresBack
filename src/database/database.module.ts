import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_CONNECT_CATEGORY, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      connectionName: 'catalog',
    }),
    MongooseModule.forRoot(process.env.MONGO_CONNECT_PRODUCT, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      connectionName: 'product',
    }),
    MongooseModule.forRoot(process.env.MONGO_CONNECT_USERS, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      connectionName: 'users',
    }),
    MongooseModule.forRoot(process.env.MONGO_CONNECT_REVIEWS, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      connectionName: 'reviews',
    }),
    MongooseModule.forRoot(process.env.MONGO_CONNECT_ORDERS, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      connectionName: 'orders',
    }),
  ],
})
export class DatabaseModule {}
