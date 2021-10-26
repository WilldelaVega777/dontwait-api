//-------------------------------------------------------------------------------
// Imports Section
//-------------------------------------------------------------------------------
import { Injectable }       from '@nestjs/common';
import { Model }            from 'mongoose'
import { InjectModel }      from '@nestjs/mongoose'
import { IRestaurant }        from '../models/interfaces/IRestaurant';

import { CreateRestaurantDto } from '../models/dto/create/create-restaurant.dto'
import { UpdateRestaurantDto } from '../models/dto/update/update-restaurant.dto'

//-------------------------------------------------------------------------------
// Service Definition Section
//-------------------------------------------------------------------------------
@Injectable()
export class RestaurantService
{
    //---------------------------------------------------------------------------
    // Private Fields Section
    //---------------------------------------------------------------------------
    private readonly restaurantModel: Model<IRestaurant>

    //--------------------------------------------------------------------------
    // Constructor Method Section
    //--------------------------------------------------------------------------
    constructor(@InjectModel('Restaurant') pRestaurantModel: Model<IRestaurant>)
    {
        this.restaurantModel = pRestaurantModel
    }
    //--------------------------------------------------------------------------
    // Public Methods Section
    //--------------------------------------------------------------------------
    public async getRestaurants(): Promise<IRestaurant[]>
    {
        return this.restaurantModel.find()
    }
    //--------------------------------------------------------------------------
    public async getRestaurant(pId: string): Promise<IRestaurant>
    {
        return this.restaurantModel.findById(pId)
    }
    //--------------------------------------------------------------------------
    public async createRestaurant(pCreateRestaurantDto: CreateRestaurantDto): Promise<IRestaurant>
    {
        const restaurant = new this.restaurantModel(pCreateRestaurantDto)
        return restaurant.save()
    }
    //--------------------------------------------------------------------------
    public async updateRestaurant(pId: string, pUpdateRestaurantDto: UpdateRestaurantDto): Promise<IRestaurant>
    {
        return this.restaurantModel.findByIdAndUpdate(pId, pUpdateRestaurantDto, { new: true })
    }
    //--------------------------------------------------------------------------
    public async deleteRestaurant(pId: string): Promise<any>
    {
        return this.restaurantModel.findByIdAndRemove(pId)
    }
}
