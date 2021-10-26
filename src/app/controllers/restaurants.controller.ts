//-------------------------------------------------------------------------------
// Imports Section
//-------------------------------------------------------------------------------
import { Controller }                       from '@nestjs/common'
import { Body }                             from '@nestjs/common'
import { Get   }                            from '@nestjs/common'
import { Post  }                            from '@nestjs/common'
import { Put   }                            from '@nestjs/common'
import { Delete }                           from '@nestjs/common'
import { CreateRestaurantDto }                from '../models/dto/create/create-restaurant.dto'
import { UpdateRestaurantDto }                from '../models/dto/update/update-restaurant.dto'
import { RestaurantService }                  from '../services/restaurant.service'

//-------------------------------------------------------------------------------
// Controller Definition Section
//-------------------------------------------------------------------------------
@Controller('Restaurants')
export class RestaurantsController {

    //--------------------------------------------------------------------------
    // Private Fields Section
    //--------------------------------------------------------------------------
    private readonly restaurantService: RestaurantService

    //--------------------------------------------------------------------------
    // Constructor Method Section
    //--------------------------------------------------------------------------
    constructor(pRestaurantService: RestaurantService)
    {
        this.restaurantService = pRestaurantService
    }

    //--------------------------------------------------------------------------
    // Public Methods Section
    //--------------------------------------------------------------------------
    @Get()
    public async getAllRestaurants()
    {
        return this.restaurantService.getRestaurants()
    }
    //--------------------------------------------------------------------------
    @Get(':id')
    public async getRestaurantById(pRestaurantId: string)
    {
        return this.restaurantService.getRestaurant(pRestaurantId)
    }
    //--------------------------------------------------------------------------
    @Post()
    public async createRestaurant(@Body() pRestaurantDto: CreateRestaurantDto)
    {
        return this.restaurantService.createRestaurant(pRestaurantDto)
    }
    //--------------------------------------------------------------------------
    @Put(':id')
    public async updateRestaurant(@Body() pRestaurantDto: UpdateRestaurantDto)
    {
        return this.restaurantService.updateRestaurant(pRestaurantDto.id, pRestaurantDto)
    }
    //--------------------------------------------------------------------------
    @Delete(':id')
    public async deleteRestaurant(pId: string)
    {
        return this.restaurantService.deleteRestaurant(pId)
    }
}
