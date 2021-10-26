//------------------------------------------------
// Class Definition Section
//------------------------------------------------
export class CategoryDto
{
    id                 : string
    name               : string
    image              : string
    keywords           : string[]
    createdAt          : Date

    constructor(
        id                : string,
        name              : string,
        image             : string,
        keywords          : string[],
        createdAt         : Date
    )
    {
        this.id             = id
        this.name           = name
        this.image          = image
        this.keywords       = keywords
        this.createdAt      = createdAt
    }
}
