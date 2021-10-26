//-------------------------------------------------------------------------------
// Imports Section
//-------------------------------------------------------------------------------
import { Schema }              from 'mongoose'

//-------------------------------------------------------------------------------
// Schema Definition Section
//-------------------------------------------------------------------------------
export const ReviewSchema = new Schema({
    id                  : String,
    restaurant_id       : String,
    user_id             : String,
    name                : String,
    description         : String,
    rating              : Number,
    createdAt           : Date
})
