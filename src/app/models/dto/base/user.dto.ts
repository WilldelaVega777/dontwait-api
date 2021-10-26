//---------------------------------------------------------------------
// Class Definition Section
//---------------------------------------------------------------------
export class UserDto
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

    constructor(
        id                  : string,
        firstName           : string,
        lastName            : string,
        address             : string,
        phone               : string,
        email               : string,
        location_longitude  : number,
        location_latitude   : number,
        createdAt           : Date
    )
    {
        this.id                  = id
        this.firstName           = firstName
        this.lastName            = lastName
        this.address             = address
        this.phone               = phone
        this.email               = email
        this.location_longitude  = location_longitude
        this.location_latitude   = location_latitude
        this.createdAt           = createdAt
    }
}
