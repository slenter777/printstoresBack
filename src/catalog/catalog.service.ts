import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from '../product/interfaces/product.inteface';

@Injectable()
export class CatalogService {
  constructor(@InjectModel('Product') private productModel: Model<Product>) {}
}
