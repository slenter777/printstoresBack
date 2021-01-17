import * as mongoose from 'mongoose';

export const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: mongoose.Schema.Types.Mixed, required: true },
  key: { type: String, required: true },
  prefix: { type: String, required: false },
});
