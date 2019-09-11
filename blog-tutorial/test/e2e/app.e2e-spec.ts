import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { ApplicationModule } from '../../src/app.module';
import { Category } from '../../src/interfaces/category.interface';

import { HttpStatus } from '@nestjs/common';
import { CategoryService } from '../../src/category/category.service';

import { CreateCategoryDTO } from '../../src/dto/create-category.dto';

describe('AppController (e2e)', () => {
  let app;

  let categoryService = {
    findAll: async (): Promise<Category[]> =>{
      return  [{name: '2'}];
    },
    create: async (createCategory: CreateCategoryDTO): Promise<Category> => {
      return createCategory;
    }
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [ApplicationModule],
    })
    .overrideProvider(CategoryService).useValue(categoryService)
    .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET) categories', () => {
    return request(app.getHttpServer())
      .get('/category/get')
      .expect(HttpStatus.OK) 
      .expect([{name: '2'}])
  });


  // it('/ (POST) categories', () => {
  //   return request(app.getHttpServer())
  //     .post('/category/create')
  //     .send({ name: '1' })
  //     .expect(HttpStatus.CREATED)
  //     .expect({ name: 'ddc'});
  // });


  afterAll(async () => {
    await app.close()
  })
});
