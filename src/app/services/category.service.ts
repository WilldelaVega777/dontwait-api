//-------------------------------------------------------------------------------
// Imports Section
//-------------------------------------------------------------------------------
import { Injectable }       from '@nestjs/common';
import { Model }            from 'mongoose'
import { InjectModel }      from '@nestjs/mongoose'
import { ICategory }        from '../models/interfaces/ICategory';

import { CreateCategoryDto } from '../models/dto/create/create-category.dto'
import { UpdateCategoryDto } from '../models/dto/update/update-category.dto'

//-------------------------------------------------------------------------------
// Service Definition Section
//-------------------------------------------------------------------------------
@Injectable()
export class CategoryService
{
    //---------------------------------------------------------------------------
    // Private Fields Section
    //---------------------------------------------------------------------------
    private readonly categoryModel: Model<ICategory>

    //--------------------------------------------------------------------------
    // Constructor Method Section
    //--------------------------------------------------------------------------
    constructor(@InjectModel('Category') pCategoryModel: Model<ICategory>)
    {
        this.categoryModel = pCategoryModel
    }

    //--------------------------------------------------------------------------
    // Service Methods Section
    //--------------------------------------------------------------------------
    async getCategories(): Promise<ICategory[]>
    {
        return this.categoryModel.find()
    }
    //--------------------------------------------------------------------------
    async getCategory(id: number): Promise<ICategory>
    {
        return this.categoryModel.findById(id)
    }
    //--------------------------------------------------------------------------
    async createCategory(category: CreateCategoryDto) : Promise<ICategory>
    {
        const newCategory = new this.categoryModel(category)
        return newCategory.save()
    }

    //--------------------------------------------------------------------------
    async updateCategory(id: number, category: UpdateCategoryDto): Promise<ICategory>
    {
        return this.categoryModel.findByIdAndUpdate(id, category, { new: true })
    }

    //--------------------------------------------------------------------------
    async deleteCategory(id: number)
    {
        return this.categoryModel.findByIdAndRemove(id)
    }
}
