//-------------------------------------------------------------------------------
// Imports Section
//-------------------------------------------------------------------------------
import { Injectable }       from '@nestjs/common';
import { Model }            from 'mongoose'
import { InjectModel }      from '@nestjs/mongoose'
import { IOrder }           from '../models/interfaces/IOrder';

import { CreateOrderDto }   from '../models/dto/create/create-order.dto'
import { UpdateOrderDto }   from '../models/dto/update/update-order.dto'

//-------------------------------------------------------------------------------
// Service Definition Section
//-------------------------------------------------------------------------------
@Injectable()
export class OrderService
{
    //---------------------------------------------------------------------------
    // Private Fields Section
    //---------------------------------------------------------------------------
    private readonly orderModel: Model<IOrder>

    //--------------------------------------------------------------------------
    // Constructor Method Section
    //--------------------------------------------------------------------------
    constructor(@InjectModel('Order') pOrderModel: Model<IOrder>)
    {
        this.orderModel = pOrderModel
    }

    //--------------------------------------------------------------------------
    // Public Methods Section
    //--------------------------------------------------------------------------
    public async getOrders(): Promise<IOrder[]>
    {
        return this.orderModel.find()
    }
    //--------------------------------------------------------------------------
    public async getOrder(pId: string): Promise<IOrder>
    {
        return this.orderModel.findById(pId)
    }
    //--------------------------------------------------------------------------
    public async createOrder(pCreateOrderDto: CreateOrderDto): Promise<IOrder>
    {
        const order = new this.orderModel(pCreateOrderDto)
        return order.save()
    }
    //--------------------------------------------------------------------------
    public async updateOrder(pId: string, pUpdateOrderDto: UpdateOrderDto): Promise<IOrder>
    {
        return this.orderModel.findByIdAndUpdate(pId, pUpdateOrderDto, { new: true })
    }
    //--------------------------------------------------------------------------
    public async deleteOrder(pId: string): Promise<any>
    {
        return this.orderModel.findByIdAndRemove(pId)
    }
}
