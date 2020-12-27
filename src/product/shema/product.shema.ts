import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  key: { type: String, required: true },
  price: { type: Number, required: true },
  discount: { type: Number, required: false },
});
