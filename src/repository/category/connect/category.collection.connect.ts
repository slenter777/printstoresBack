import { MongooseModule } from '@nestjs/mongoose';
import { CategorySchema } from '../schema/category.schema';

export const categoryConnect = MongooseModule.forFeature([{ name: 'Category', schema: CategorySchema }], 'catalog');
