import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  title: string;
  @Prop({ type: Object })
  category: { id: string; title: string };
  @Prop()
  related_category: Array<string>;
  @Prop()
  price: number;
  @Prop()
  old_price: number;
  @Prop()
  product_id: string;
  @Prop()
  preview: string;
  @Prop()
  description: string;
  @Prop()
  details: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
