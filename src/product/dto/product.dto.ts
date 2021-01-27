export class ProductDto {
  price: number;
  discount?: number;
  key: string;
  image: string;
  name: string;
  oldPrice: number;
  description?: string;
  details?: string;
  seo?: { meta: string; title: string; description: string };
  prefix?: string;
}
