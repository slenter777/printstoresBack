export class CategoryDeleteDto {
  key: string;
}

class CategoryDto {
  name: string;
  image: string | File;
  key: string;
}

export default CategoryDto;
