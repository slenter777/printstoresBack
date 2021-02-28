import moment from 'moment';

export class ReviewsDto {
  clientName: string;
  photo?: Array<Blob | File>;
  orderNumber: string;
  email: string;
  phone: number;
  message: string;
  rating: number;
  recaptcha_key: string;
  created_at: string = moment().format('LLL');
}
