//-------------------------------------------------------------------------------
// Imports Section
//-------------------------------------------------------------------------------
import { Controller }                       from '@nestjs/common'
import { Body }                             from '@nestjs/common'
import { Get   }                            from '@nestjs/common'
import { Post  }                            from '@nestjs/common'
import { Put   }                            from '@nestjs/common'
import { Delete }                           from '@nestjs/common'
import { CategoryDto }                      from './../models/dto/base/category.dto';
import { CategoryService }                  from '../services/category.service'

//-------------------------------------------------------------------------------
// Controller Definition Section
//-------------------------------------------------------------------------------
@Controller('Categories')
export class CategoriesController {

    //--------------------------------------------------------------------------
    // Private Fields Section
    //--------------------------------------------------------------------------
    private readonly categoryService: CategoryService

    //--------------------------------------------------------------------------
    // Constructor Method Section
    //--------------------------------------------------------------------------
    constructor(pCategoryService: CategoryService)
    {
        this.categoryService = pCategoryService
    }

    //--------------------------------------------------------------------------
    // Controller Methods Section
    //--------------------------------------------------------------------------
    @Get()
    async getCategories()
    {
        return this.categoryService.getCategories()
    }
    //--------------------------------------------------------------------------
    @Get(':id')
    async getCategory(pId: string)
    {
        return this.categoryService.getCategory(Number(pId))
    }
    //--------------------------------------------------------------------------
    @Post()
    async createCategory(@Body() pCategory: CategoryDto)
    {
        return this.categoryService.createCategory(pCategory)
    }
    //--------------------------------------------------------------------------
    @Put(':id')
    async updateCategory(pId: string, @Body() pCategory: CategoryDto)
    {
        return this.categoryService.updateCategory(Number(pId), pCategory)
    }
    //--------------------------------------------------------------------------
    @Delete(':id')
    async deleteCategory(pId: string)
    {
        return this.categoryService.deleteCategory(Number(pId))
    }
}
