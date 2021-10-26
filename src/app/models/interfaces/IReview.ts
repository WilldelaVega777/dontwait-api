//---------------------------------------------------------------------
// Imports Section
//---------------------------------------------------------------------
import { Document }         from 'mongoose'

//---------------------------------------------------------------------
// Interface Section
//---------------------------------------------------------------------
export interface IReview extends Document
{
    id                  : string
    restaurant_id       : string
    user_id             : string
    name                : string
    description         : string
    rating              : number
    createdAt           : Date
}
