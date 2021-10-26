//---------------------------------------------------------------------
// Imports Section
//---------------------------------------------------------------------
import { CategoryDto }          from './category.dto'
import { ReviewDto }            from './review.dto'
import { TransactionDto }       from './transaction.dto'
import { MenuItemDto }          from './menuitem.dto'

//---------------------------------------------------------------------
// Class Definition Section
//---------------------------------------------------------------------
export class RestaurantDto
{
    id                  : string
    name                : string
    image               : string
    categories          : CategoryDto[]
    reviews             : ReviewDto[]
    transactions        : TransactionDto[]
    menuItems           : MenuItemDto[]
    createdAt           : Date

    constructor(
        id                  : string,
        name                : string,
        image               : string,
        categories          : CategoryDto[],
        reviews             : ReviewDto[],
        transactions        : TransactionDto[],
        menuItems           : MenuItemDto[],
        createdAt           : Date
    )
    {
        this.id                  = id
        this.name                = name
        this.image               = image
        this.categories          = categories
        this.reviews             = reviews
        this.transactions        = transactions
        this.menuItems           = menuItems
        this.createdAt           = createdAt
    }
}
