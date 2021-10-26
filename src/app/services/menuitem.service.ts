//-------------------------------------------------------------------------------
// Imports Section
//-------------------------------------------------------------------------------
import { Injectable }       from '@nestjs/common';
import { Model }            from 'mongoose'
import { InjectModel }      from '@nestjs/mongoose'
import { IMenuItem }        from '../models/interfaces/IMenuItem';

import { CreateMenuItemDto } from '../models/dto/create/create-menuitem.dto'
import { UpdateMenuItemDto } from '../models/dto/update/update-menuitem.dto'

//-------------------------------------------------------------------------------
// Service Definition Section
//-------------------------------------------------------------------------------
@Injectable()
export class MenuItemService
{
    //---------------------------------------------------------------------------
    // Private Fields Section
    //---------------------------------------------------------------------------
    private readonly menuitemModel: Model<IMenuItem>

    //--------------------------------------------------------------------------
    // Constructor Method Section
    //--------------------------------------------------------------------------
    constructor(@InjectModel('MenuItem') pCategoryModel: Model<IMenuItem>)
    {
        this.menuitemModel = pCategoryModel
    }

    //--------------------------------------------------------------------------
    // Service Methods Section
    //--------------------------------------------------------------------------
    async getMenuItems(): Promise<IMenuItem[]>
    {
        return this.menuitemModel.find()
    }
    //--------------------------------------------------------------------------
    async getMenuItem(id: string): Promise<IMenuItem>
    {
        return this.menuitemModel.findById(id)
    }
    //--------------------------------------------------------------------------
    async createMenuItem(menuitem: CreateMenuItemDto) : Promise<IMenuItem>
    {
        const newMenuItem = new this.menuitemModel(menuitem)
        return newMenuItem.save()
    }

    //--------------------------------------------------------------------------
    async updateMenuItem(id: string, menuitem: UpdateMenuItemDto): Promise<IMenuItem>
    {
        return this.menuitemModel.findByIdAndUpdate(id, menuitem, { new: true })
    }

    //--------------------------------------------------------------------------
    async deleteMenuItem(id: string): Promise<any>
    {
        return this.menuitemModel.findByIdAndRemove(id)
    }
}
