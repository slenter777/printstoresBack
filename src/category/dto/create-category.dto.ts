import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty()
  title: string;
  @ApiProperty({ required: false })
  related_products?: Array<string>;
  @ApiProperty()
  id: string;
}
