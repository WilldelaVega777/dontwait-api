//-------------------------------------------------------------------------------
// Imports Section
//-------------------------------------------------------------------------------
import { Schema }              from 'mongoose'

//-------------------------------------------------------------------------------
// Schema Definition Section
//-------------------------------------------------------------------------------
export const MenuItemSchema = new Schema({
    id                  : String,
    restaurant_id       : String,
    name                : String,
    description         : String,
    image               : String,
    price               : Number,
    createdAt           : Date
})
