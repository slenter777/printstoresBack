import { Schema } from 'mongoose';

export const ReviewsSchema = new Schema({
  clientName: { type: String, required: true },
  photo: { type: Schema.Types.Mixed },
  orderNumber: { type: String },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  message: { type: String, required: true },
  rating: { type: Number, required: true },
  status: { type: String, default: 'not_verified' },
  created_at: {
    type: Schema.Types.Mixed,
    default: Date.now,
  },
});
