//------------------------------------------------
// Class Definition Section
//------------------------------------------------
export class MenuItemDto
{
    id                  : string
    restaurant_id       : string
    name                : string
    description         : string
    image               : string
    price               : number
    createdAt           : Date

    constructor(
        id                  : string,
        restaurant_id       : string,
        name                : string,
        description         : string,
        image               : string,
        price               : number,
        createdAt           : Date
    )
    {
        this.id                  = id
        this.restaurant_id       = restaurant_id
        this.name                = name
        this.description         = description
        this.image               = image
        this.price               = price
        this.createdAt           = createdAt
    }
}
