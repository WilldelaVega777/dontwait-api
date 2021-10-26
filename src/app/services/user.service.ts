//-------------------------------------------------------------------------------
// Imports Section
//-------------------------------------------------------------------------------
import { Injectable }       from '@nestjs/common';
import { Model }            from 'mongoose'
import { InjectModel }      from '@nestjs/mongoose'
import { IUser }            from '../models/interfaces/IUser';

import { CreateUserDto }    from '../models/dto/create/create-user.dto'
import { UpdateUserDto }    from '../models/dto/update/update-user.dto'

//-------------------------------------------------------------------------------
// Service Definition Section
//-------------------------------------------------------------------------------
@Injectable()
export class UserService
{
    //---------------------------------------------------------------------------
    // Private Fields Section
    //---------------------------------------------------------------------------
    private readonly userModel: Model<IUser>

    //--------------------------------------------------------------------------
    // Constructor Method Section
    //--------------------------------------------------------------------------
    constructor(@InjectModel('User') pUserModel: Model<IUser>)
    {
        this.userModel = pUserModel
    }

    //--------------------------------------------------------------------------
    // Public Methods Section
    //--------------------------------------------------------------------------
    public async getUsers(): Promise<IUser[]>
    {
        return this.userModel.find()
    }
    //--------------------------------------------------------------------------
    public async getUser(pUserId: string): Promise<IUser>
    {
        return this.userModel.findById(pUserId)
    }
    //--------------------------------------------------------------------------
    public async createUser(pCreateUserDto: CreateUserDto): Promise<IUser>
    {
        const user = new this.userModel(pCreateUserDto)
        return user.save()
    }
    //--------------------------------------------------------------------------
    public async updateUser(pUserId: string, pUpdateUserDto: UpdateUserDto): Promise<IUser>
    {
        return this.userModel.findByIdAndUpdate(pUserId, pUpdateUserDto, { new: true })
    }
    //--------------------------------------------------------------------------
    public async deleteUser(pUserId: string): Promise<IUser>
    {
        return this.userModel.findByIdAndRemove(pUserId)
    }

}
