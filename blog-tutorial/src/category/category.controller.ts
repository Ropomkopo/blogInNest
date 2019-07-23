import { Controller, Get, Post, Res, Body, HttpStatus, Req, Patch, Param } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDTO } from 'src/dto/create-category.dto';
import { Category } from 'src/interfaces/category.interface';
import { async } from 'rxjs/internal/scheduler/async';
import { ApiImplicitParam } from '@nestjs/swagger';


@Controller('category')
export class CategoryController {
    constructor(
        private categoryService: CategoryService
    ) { }


    @Get('/get')
    async getAll(@Res() res): Promise<Category[]> {
        const data = await this.categoryService.findAll()
        return res.status(HttpStatus.CREATED).json(data)
    }
    @Post('/create')
    async creat(@Res() res, @Body() createCategoryData: CreateCategoryDTO): Promise<Category> {
        const data = await this.categoryService.create(createCategoryData);
        return res.status(HttpStatus.CREATED).json(data)
    }
    @Get(':id')
    @ApiImplicitParam({ name: 'id' })
    async getById(@Param('id') param, @Res() res){
        const getById = await this.categoryService.findById(param);
        return res.status(HttpStatus.CREATED).json(getById);
    }
    // @Patch(':id')
    // @ApiImplicitParam({ name: 'id' })
    // @ApiImplicitParam({ NewName: 'NewName' })
    // async update(@Param('id') param, @Res() res){
    //     const upDateCategory = await this.categoryService.update(param);

    //     return res.status(HttpStatus.CREATED).json(upDateCategory);
    // }
}
