export class OrderDto {
  clientName: string;
  email: string;
  phone: number;
  message: string;
  social: string;
  delivery_method: string;
  delivery_city: string;
  delivery_address: string;
  delivery_date: string;
  delivery_time: string;
  delivery_summary: string | number;
  payment_method: string;
  order_summary: string | number;
  order_products: any[];
}
