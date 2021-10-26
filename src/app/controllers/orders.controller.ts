//-------------------------------------------------------------------------------
// Imports Section
//-------------------------------------------------------------------------------
import { Controller }                       from '@nestjs/common'
import { Body }                             from '@nestjs/common'
import { Get   }                            from '@nestjs/common'
import { Post  }                            from '@nestjs/common'
import { Put   }                            from '@nestjs/common'
import { Delete }                           from '@nestjs/common'
import { CreateOrderDto }                from '../models/dto/create/create-order.dto'
import { UpdateOrderDto }                from '../models/dto/update/update-order.dto'
import { OrderService }                  from '../services/order.service'

//-------------------------------------------------------------------------------
// Controller Definition Section
//-------------------------------------------------------------------------------
@Controller('Orders')
export class OrdersController {

    //--------------------------------------------------------------------------
    // Private Fields Section
    //--------------------------------------------------------------------------
    private readonly orderService: OrderService

    //--------------------------------------------------------------------------
    // Constructor Method Section
    //--------------------------------------------------------------------------
    constructor(pOrderService: OrderService)
    {
        this.orderService = pOrderService
    }

    //--------------------------------------------------------------------------
    // Public Methods Section
    //--------------------------------------------------------------------------
    @Get()
    public async getAllOrders()
    {
        return this.orderService.getOrders()
    }
    //--------------------------------------------------------------------------
    @Get(':id')
    public async getOrderById(pOrderId: string)
    {
        return this.orderService.getOrder(pOrderId)
    }
    //--------------------------------------------------------------------------
    @Post()
    public async createOrder(@Body() pOrderDto: CreateOrderDto)
    {
        return this.orderService.createOrder(pOrderDto)
    }
    //--------------------------------------------------------------------------
    @Put(':id')
    public async updateOrder(@Body() pOrderDto: UpdateOrderDto)
    {
        return this.orderService.updateOrder(pOrderDto.id, pOrderDto)
    }
    //--------------------------------------------------------------------------
    @Delete(':id')
    public async deleteOrder(pId: string)
    {
        return this.orderService.deleteOrder(pId)
    }
}
