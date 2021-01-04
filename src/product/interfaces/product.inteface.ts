import { Document } from 'mongoose';
export interface Product extends Document {
  price: number;
  discount?: number;
  key: string;
  image: string;
  name: string;
  prefix: string;
}
