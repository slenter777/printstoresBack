import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import CategoryDto from './dto/category.dto';
import { Category } from './interfaces/Category.interfaces';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel('Category') private readonly categoryModel: Model<Category>,
  ) {}

  async create(category: CategoryDto) {
    console.log(category);
    return await new this.categoryModel(category).save();
  }
  async getAllCategory() {
    return await this.categoryModel.find();
  }

  async getCategoryByKey(key: string) {
    return await this.categoryModel.find({ key });
  }

  async getCategoryById(id: number) {
    return await this.categoryModel.findById(id);
  }
}
