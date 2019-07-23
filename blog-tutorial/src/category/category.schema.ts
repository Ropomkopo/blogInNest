import * as mongoose from 'mongoose';
import { Category } from 'src/interfaces/category.interface';

export const CategorySchema = new mongoose.Schema<Category>({
  name: String
});