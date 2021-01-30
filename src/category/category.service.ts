import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CrumbsService } from '../crumbs/crumbs.service';
import { ModelsService } from '../models/models.service';
import { Product } from '../product/interfaces/product.inteface';
import CategoryDto, { CategoryDeleteDto } from './dto/category.dto';
import { Category } from './interfaces/Category.interfaces';

@Injectable()
export class CategoryService {
  categoryModel = this.modelsService.getCategoryModel();
  productModel = this.modelsService.getProductModel();
  constructor(
    private modelsService: ModelsService,
    private crumbsService: CrumbsService,
  ) {}

  async create(category: CategoryDto) {
    const result = await this.categoryModel.findOne({ key: category.key });
    if (result)
      throw new BadRequestException({ message: 'Такая категория уже есть' });

    return await new this.categoryModel(category).save();
  }
  async getAllCategory() {
    const category = await this.categoryModel.find();
    return { category };
  }

  async deleteCategory(data: CategoryDeleteDto[]) {
    let quantity = 0;
    for await (let key of data) {
      await this.categoryModel.deleteOne({ key });
      quantity++;
    }
    const category = await this.categoryModel.find();
    return { category, quantity };
  }

  async findByKey(key: string) {
    const category = await this.productModel.find({ key });
    return { category };
  }

  async getCategoryByKey(key: string) {
    const category = await this.categoryModel.find({ key });
  }

  async getCategoryById(id: number) {
    const category = await this.categoryModel.findById(id);
    return { category };
  }
}
