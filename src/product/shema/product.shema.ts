import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true, text: true },
  image: { type: String, required: true },
  key: { type: String, required: true },
  price: { type: Number, required: true },
  discount: { type: Number, required: false },
  description: { type: String, required: false },
  details: { type: String, required: false },
  prefix: { type: String, required: true },
  seo: { meta: String, title: String, description: String },
});
