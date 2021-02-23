import { Document } from 'mongoose';

export interface ReviewsModel extends Document {
  clientName: string;
  photo?: Array<Blob | File>;
  orderNumber: string;
  email: string;
  phone: number;
  message: string;
  rating: number;
  created_at?: string;
}
