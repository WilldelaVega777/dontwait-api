//-------------------------------------------------------------------------------
// Imports Section
//-------------------------------------------------------------------------------
import { Schema }              from 'mongoose'
import { CategorySchema }      from './category'
import { ReviewSchema }        from './review'
import { TransactionSchema }   from './transaction'
import { MenuItemSchema }      from './menuItem'

//-------------------------------------------------------------------------------
// Schema Definition Section
//-------------------------------------------------------------------------------
export const RestaurantSchema = new Schema({
    id                  : String,
    name                : String,
    image               : String,
    categories          : [CategorySchema],
    reviews             : [ReviewSchema],
    transactions        : [TransactionSchema],
    menuItems           : [MenuItemSchema],
    createdAt           : Date
})
