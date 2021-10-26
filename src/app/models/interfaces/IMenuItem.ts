//---------------------------------------------------------------------
// Imports Section
//---------------------------------------------------------------------
import { Document }         from 'mongoose'

//---------------------------------------------------------------------
// Interface Section
//---------------------------------------------------------------------
export interface IMenuItem extends Document
{
    id                  : string
    restaurant_id       : string
    name                : string
    description         : string
    image               : string
    price               : number
    createdAt           : Date
}




