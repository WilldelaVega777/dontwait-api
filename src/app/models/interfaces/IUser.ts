//---------------------------------------------------------------------
// Imports Section
//---------------------------------------------------------------------
import { Document }         from 'mongoose'

//---------------------------------------------------------------------
// Interface Section
//---------------------------------------------------------------------
export interface IUser extends Document
{
    id                  : string
    firstName           : string
    lastName            : string
    address             : string
    phone               : string
    email               : string
    location_longitude  : number
    location_latitude   : number
    createdAt           : Date
}
