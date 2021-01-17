import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

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
    MongooseModule.forRoot(process.env.MONGO_CONNECT_USERS, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      connectionName: 'users',
    }),
  ],
})
export class DatabaseModule {}
