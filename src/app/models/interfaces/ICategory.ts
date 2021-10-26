//---------------------------------------------------------------------
// Imports Section
//---------------------------------------------------------------------
import { Document }         from 'mongoose'

//---------------------------------------------------------------------
// Interface Section
//---------------------------------------------------------------------
export interface ICategory extends Document
{
    id?                 : string
    name                : string
    image               : string
    keywords?           : string[]
    createdAt           : Date
}

