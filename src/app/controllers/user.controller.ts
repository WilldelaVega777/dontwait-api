//-------------------------------------------------------------------------------
// Imports Section
//-------------------------------------------------------------------------------
import { Controller }                       from '@nestjs/common'
import { Body }                             from '@nestjs/common'
import { Get   }                            from '@nestjs/common'
import { Post  }                            from '@nestjs/common'
import { Put   }                            from '@nestjs/common'
import { Delete }                           from '@nestjs/common'
import { CreateUserDto }                    from './../models/dto/create/create-user.dto'
import { UpdateUserDto }                    from './../models/dto/update/update-user.dto'
import { UserService }                      from '../services/user.service'

//-------------------------------------------------------------------------------
// Controller Definition Section
//-------------------------------------------------------------------------------
@Controller('Users')
export class UsersController {

    //--------------------------------------------------------------------------
    // Private Fields Section
    //--------------------------------------------------------------------------
    private readonly userService: UserService

    //--------------------------------------------------------------------------
    // Constructor Method Section
    //--------------------------------------------------------------------------
    constructor(pUserService: UserService)
    {
        this.userService = pUserService
    }

    //--------------------------------------------------------------------------
    // Public Methods Section
    //--------------------------------------------------------------------------
    @Get()
    public async getAllUsers()
    {
        return this.userService.getUsers()
    }
    //--------------------------------------------------------------------------
    @Get(':id')
    public async getUserById(pUserId: string)
    {
        return this.userService.getUser(pUserId)
    }
    //--------------------------------------------------------------------------
    @Post()
    public async createUser(@Body() pUserDto: CreateUserDto)
    {
        return this.userService.createUser(pUserDto)
    }
    //--------------------------------------------------------------------------
    @Put(':id')
    public async updateUser(@Body() pUserDto: UpdateUserDto)
    {
        return this.userService.updateUser(pUserDto.id, pUserDto)
    }
    //--------------------------------------------------------------------------
    @Delete(':id')
    public async deleteUser(pId: string)
    {
        return this.userService.deleteUser(pId)
    }
}
