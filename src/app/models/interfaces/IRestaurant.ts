//---------------------------------------------------------------------
// Imports Section
//---------------------------------------------------------------------
import { Document }         from 'mongoose'
import { ICategory }        from './ICategory'
import { IMenuItem }        from './IMenuItem'
import { ITransaction }     from './ITransaction'
import { IReview }          from './IReview'

//---------------------------------------------------------------------
// Interface Section
//---------------------------------------------------------------------
export interface IRestaurant extends Document
{
    id                  : string
    name                : string
    image               : string
    categories          : ICategory[]
    reviews             : IReview[]
    transactions        : ITransaction[]
    menuItems           : IMenuItem[]
    createdAt           : Date
}









