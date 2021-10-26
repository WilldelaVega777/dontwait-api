//---------------------------------------------------------------------
// Imports Section
//---------------------------------------------------------------------
import { UserDto }              from './user.dto'
import { RestaurantDto }        from './restaurant.dto'
import { MenuItemDto }          from './menuitem.dto'

//------------------------------------------------
// Class Definition Section
//------------------------------------------------
export class OrderDto
{
    id                  : string
    user                : UserDto
    restaurant          : RestaurantDto
    items               : MenuItemDto[]
    createdAt           : Date

    constructor(
        id                  : string,
        user                : UserDto,
        restaurant          : RestaurantDto,
        items               : MenuItemDto[],
        createdAt           : Date
    )
    {
        this.id              = id
        this.user            = user
        this.restaurant      = restaurant
        this.items           = items
        this.createdAt       = createdAt
    }
}

