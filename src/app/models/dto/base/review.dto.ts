//---------------------------------------------------------------------
// Class Definition Section
//---------------------------------------------------------------------
export class ReviewDto
{
    id                  : string
    restaurant_id       : string
    user_id             : string
    name                : string
    description         : string
    rating              : number
    createdAt           : Date

    constructor(
        id                  : string,
        restaurant_id       : string,
        user_id             : string,
        name                : string,
        description         : string,
        rating              : number,
        createdAt           : Date
    )
    {
        this.id                  = id
        this.restaurant_id       = restaurant_id
        this.user_id             = user_id
        this.name                = name
        this.description         = description
        this.rating              = rating
        this.createdAt           = createdAt
    }
}
