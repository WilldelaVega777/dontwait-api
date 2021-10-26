//---------------------------------------------------------------------
// Imports Section
//---------------------------------------------------------------------
import { Document }         from 'mongoose'

//---------------------------------------------------------------------
// Interface Section
//---------------------------------------------------------------------
export interface ITransaction extends Document
{
    id                  : string
    name                : string
    description         : string
    createdAt           : Date
}

