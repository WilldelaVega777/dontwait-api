//---------------------------------------------------------------------
// Imports Section
//---------------------------------------------------------------------
import { Document }         from 'mongoose'
import { IUser }            from './IUser'
import { IRestaurant }      from './IRestaurant'
import { IMenuItem }        from './IMenuItem'

//---------------------------------------------------------------------
// Interface Section
//---------------------------------------------------------------------
export interface IOrder extends Document
{
    id                  : string
    user                : IUser
    restaurant          : IRestaurant
    items               : IMenuItem[]
    createdAt           : Date
}
