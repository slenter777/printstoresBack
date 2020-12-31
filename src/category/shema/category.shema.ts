import * as mongoose from 'mongoose';

export const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  key: { type: String, required: true },
  prefix: { type: String, required: false },
});
