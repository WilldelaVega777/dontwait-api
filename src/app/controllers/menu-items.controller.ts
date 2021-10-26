//-------------------------------------------------------------------------------
// Imports Section
//-------------------------------------------------------------------------------
import { Controller }                       from '@nestjs/common'
import { Body }                             from '@nestjs/common'
import { Get   }                            from '@nestjs/common'
import { Post  }                            from '@nestjs/common'
import { Put   }                            from '@nestjs/common'
import { Delete }                           from '@nestjs/common'
import { CreateMenuItemDto }                from '../models/dto/create/create-menuitem.dto'
import { UpdateMenuItemDto }                from '../models/dto/update/update-menuitem.dto'
import { MenuItemService }                  from '../services/menuitem.service'

//-------------------------------------------------------------------------------
// Controller Definition Section
//-------------------------------------------------------------------------------
@Controller('MenuItems')
export class MenuItemsController {

    //--------------------------------------------------------------------------
    // Private Fields Section
    //--------------------------------------------------------------------------
    private readonly menuItemService: MenuItemService

    //--------------------------------------------------------------------------
    // Constructor Method Section
    //--------------------------------------------------------------------------
    constructor(pMenuItemService: MenuItemService)
    {
        this.menuItemService = pMenuItemService
    }

    //--------------------------------------------------------------------------
    // Public Methods Section
    //--------------------------------------------------------------------------
    @Get()
    public async getAllMenuItems()
    {
        return this.menuItemService.getMenuItems()
    }
    //--------------------------------------------------------------------------
    @Get(':id')
    public async getMenuItemById(pMenuItemId: string)
    {
        return this.menuItemService.getMenuItem(pMenuItemId)
    }
    //--------------------------------------------------------------------------
    @Post()
    public async createMenuItem(@Body() pMenuItemDto: CreateMenuItemDto)
    {
        return this.menuItemService.createMenuItem(pMenuItemDto)
    }
    //--------------------------------------------------------------------------
    @Put(':id')
    public async updateMenuItem(@Body() pMenuItemDto: UpdateMenuItemDto)
    {
        return this.menuItemService.updateMenuItem(pMenuItemDto.id, pMenuItemDto)
    }
    //--------------------------------------------------------------------------
    @Delete(':id')
    public async deleteMenuItem(pId: string)
    {
        return this.menuItemService.deleteMenuItem(pId)
    }
}
