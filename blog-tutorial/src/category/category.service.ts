import { Injectable, Post } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from '../interfaces/category.interface'
import { CreateCategoryDTO } from '../dto/create-category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel('Category') private readonly categoryModel: Model<Category>
    ) { }

  async create(createCategory: CreateCategoryDTO): Promise<Category> {
    const createdCategory = new this.categoryModel(createCategory);
    return await createdCategory.save();
  }

  async findAll(): Promise<Category[]> {
    return await this.categoryModel.find({});
  }
  async findById( id: string): Promise<Category> {
    return await this.categoryModel.findById(id);
  }
  async update(id: string):Promise<Category> {
    return await this.categoryModel.findById(id)
  }
}
