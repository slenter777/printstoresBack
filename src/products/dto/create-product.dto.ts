import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty()
  title: string;
  @ApiProperty({ required: false })
  category?: { id: string; title: string };
  @ApiProperty({ required: false })
  related_category: Array<{ categoryID: string }>;
  @ApiProperty()
  price: number;
  @ApiProperty()
  old_price: number;
  @ApiProperty()
  product_id: string;
  @ApiProperty({ required: false })
  preview?: string;
  @ApiProperty({ required: false })
  description?: string;
  @ApiProperty({ required: false })
  details?: string;
}
