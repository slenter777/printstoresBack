import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

console.log(
  process.env.MONGO_CONNECT_CATEGORY,
  process.env.MONGO_CONNECT_PRODUCT,
);

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_CONNECT_CATEGORY, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      connectionName: 'category',
    }),
    MongooseModule.forRoot(process.env.MONGO_CONNECT_PRODUCT, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      connectionName: 'product',
    }),
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
