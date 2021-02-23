import { Schema } from 'mongoose';

export const OrderSchema = new Schema({
  clientName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  message: { type: String, required: true },
  social: { type: String },
  delivery_method: { type: String, required: true },
  delivery_city: { type: String, required: true },
  delivery_address: { type: String, required: true },
  delivery_date: { type: String, required: true },
  delivery_time: { type: String, required: true },
  delivery_summary: { type: String, required: true },
  payment_method: { type: String, required: true },
  payment_status: { type: String, default: 'pending' },
  orderID: { type: String, required: true, unique: true },
  order_summary: { type: Number, required: true },
  order_products: { type: Array, required: true },
  created_at: {
    type: Schema.Types.Mixed,
    default: Date.now,
  },
});
