//-------------------------------------------------------------------------------
// Imports Section
//-------------------------------------------------------------------------------
import { Schema }              from 'mongoose'
import { UserSchema }          from './user'
import { RestaurantSchema }    from './restaurant'
import { MenuItemSchema }      from './menuItem'

//-------------------------------------------------------------------------------
// Schema Definition Section
//-------------------------------------------------------------------------------
export const OrderSchema = new Schema({
    id                  : String,
    user                : UserSchema,
    restaurant          : RestaurantSchema,
    items               : [MenuItemSchema],
    createdAt           : Date
})
