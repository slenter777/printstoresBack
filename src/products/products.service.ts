import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductDocument } from './schema/product.schema';

interface IFilterParams {
  findBy: object;
  page: number;
  sortBy: string;
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
    const { page, pageSize, sortBy, orderBy, findBy } = filterParams;

    const total = await this.productModel.find({ ...findBy });
    const products = await this.productModel
      .find({ ...findBy })
      .sort({ [sortBy]: orderBy })
      .skip(+pageSize * (page - 1))
      .limit(+pageSize);

    return { total: total.length, products };
  }

  async findAll(filterParams: IFilterParams) {
    const { page, pageSize, sortBy, orderBy, findBy } = filterParams;
    const total = await this.productModel.find();

    const products = await this.productModel
      .find({ ...findBy })
      .sort({ [sortBy]: orderBy })
      .skip(+pageSize * (+page - 1))
      .limit(+pageSize);
    return {
      total: total.length,
      products,
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
