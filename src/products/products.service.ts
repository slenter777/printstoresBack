import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductDocument } from './schema/product.schema';

interface IFilterParams {
  categoryID?: string;
  page: number;
  filterText: string;
  sortBy: string;
  direction: string;
  pageSize: number;
  orderBy: number;
}

@Injectable()
export class ProductsService {
  constructor(@InjectModel('Product') private productModel: Model<ProductDocument>) {}
  async create(createProductDto: CreateProductDto) {
    const product = await new this.productModel(createProductDto).save();
    return { id: product._id };
  }

  async filterByRelatedCategory(filterParams: IFilterParams) {
    this.productModel.createIndexes({ title: 'text' });

    const { categoryID, direction, filterText, page, pageSize, sortBy, orderBy } = filterParams;

    if (filterText.length < 3) {
      const total = await this.productModel.find();
      const products = await this.productModel
        .find({ related_category: categoryID })
        .sort({ [sortBy]: orderBy })
        .skip(+pageSize * (page - 1))
        .limit(+pageSize);

      return {
        total: total.length,
        products,
      };
    }

    const total = await this.productModel.find({
      $text: { $search: filterText },
    });

    const products = await this.productModel
      .find({ title: { $regex: filterText }, related_category: categoryID })
      .sort({ [sortBy]: orderBy })
      .skip(+pageSize * (+page - 1))
      .limit(+pageSize);
    return {
      products,
      total: total.length,
    };
  }

  async findAll(filterParams: IFilterParams) {
    this.productModel.createIndexes({ title: 'text' });
    const { categoryID, direction, filterText, page, pageSize, sortBy, orderBy } = filterParams;

    if (filterText.length < 3) {
      const total = await this.productModel.find();
      const products = await this.productModel
        .find()
        .sort({ [sortBy]: orderBy })
        .skip(+pageSize * (+page - 1))
        .limit(+pageSize);
      return {
        total: total.length,
        products,
      };
    }

    const total = await this.productModel.find({
      title: { $regex: filterText },
    });

    const products = await this.productModel
      .find({ title: { $regex: filterText } })
      .sort({ [sortBy]: orderBy })
      .skip(+pageSize * (+page - 1))
      .limit(+pageSize);
    return {
      products,
      total: total.length,
    };
  }

  async findOne(product_id: string) {
    const product = await this.productModel.find({ product_id }).limit(1);
    console.log(product);
    return { products: product };
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
