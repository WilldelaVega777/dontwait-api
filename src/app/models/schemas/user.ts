//-------------------------------------------------------------------------------
// Imports Section
//-------------------------------------------------------------------------------
import { Schema }              from 'mongoose'

//-------------------------------------------------------------------------------
// Schema Definition Section
//-------------------------------------------------------------------------------
export const UserSchema = new Schema({
    id                  : String,
    firstName           : String,
    lastName            : String,
    address             : String,
    phone               : String,
    email               : String,
    location_longitude  : Number,
    location_latitude   : Number,
    createdAt           : Date
})






