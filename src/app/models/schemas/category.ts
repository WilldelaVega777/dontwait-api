//-------------------------------------------------------------------------------
// Imports Section
//-------------------------------------------------------------------------------
import { Schema }              from 'mongoose'

//-------------------------------------------------------------------------------
// Schema Definition Section
//-------------------------------------------------------------------------------
export const CategorySchema = new Schema({
    id                  : String,
    name                : String,
    image               : String,
    keywords            : [String],
    createdAt           : Date
})

