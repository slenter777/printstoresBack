import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

console.log(
  process.env.MONGO_CONNECT_CATEGORY,
  process.env.MONGO_CONNECT_PRODUCT,
);

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://slenter:slenter777@server.mo2qd.mongodb.net/category',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        connectionName: 'category',
      },
    ),
    MongooseModule.forRoot(
      'mongodb+srv://slenter:slenter777@server.mo2qd.mongodb.net/product',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        connectionName: 'product',
      },
    ),
    MongooseModule.forRoot(
      'mongodb+srv://slenter:slenter777@server.mo2qd.mongodb.net/goods',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        connectionName: 'goods',
      },
    ),
  ],
})
export class DatabaseModule {}
