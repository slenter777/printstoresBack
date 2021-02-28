import { Prop, Schema, SchemaFactory,  } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type CategoryDocument = Category & Document;

@Schema()
export class Category {
    @Prop()
    related_products:Array<any>
    @Prop()
    title: string;
    @Prop()
    id: string;

}


export const CategorySchema = SchemaFactory.createForClass(Category);