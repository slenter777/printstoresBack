import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema, Product } from '../../../products/schema/product.schema';
export const ProductsConnect = MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }], 'catalog');
