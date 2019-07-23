import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest', {
      useNewUrlParser: true
    }),
    CategoryModule
  ],
})
export class ApplicationModule {}