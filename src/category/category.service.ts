import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CrumbsService } from '../crumbs/crumbs.service';
import { Product } from '../product/interfaces/product.inteface';
import CategoryDto from './dto/category.dto';
import { Category } from './interfaces/Category.interfaces';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel('Category') private readonly categoryModel: Model<Category>,
    @InjectModel('Product') private productModel: Model<Product>,
    private crumbsService: CrumbsService,
  ) {}

  async create(category: CategoryDto) {
    return await new this.categoryModel(category).save();
  }
  async getAllCategory() {
    const itemsList = await this.categoryModel.find();
    const crumbs = await this.crumbsService.createCatalogCrumbs();
    return {
      crumbs,
      itemsList,
    };
  }

  async findByKey(key: string) {
    const itemsList = await this.productModel.find({ key });
    const crumbs = await this.crumbsService.createCategoryCrumbs(key);
    return {
      crumbs,
      itemsList,
    };
  }

  async getCategoryByKey(key: string) {
    const category = await this.categoryModel.find({ key });
  }

  async getCategoryById(id: number) {
    return await this.categoryModel.findById(id);
  }
}
