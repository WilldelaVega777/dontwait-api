//-------------------------------------------------------------------------------
// Imports Section
//-------------------------------------------------------------------------------
import { Controller }                       from '@nestjs/common'
import { Get }                              from '@nestjs/common'
import { Post }                             from '@nestjs/common'
import { Body }                             from '@nestjs/common'
import { Put }                              from '@nestjs/common'
import { Delete }                           from '@nestjs/common'
import { TransactionService }               from '../services/transaction.service'

//-------------------------------------------------------------------------------
// Controller Definition Section
//-------------------------------------------------------------------------------
@Controller('Transactions')
export class TransactionsController
{
    //--------------------------------------------------------------------------
    // Private Fields Section
    //--------------------------------------------------------------------------
    private readonly transactionService: TransactionService

    //--------------------------------------------------------------------------
    // Constructor Method Section
    //--------------------------------------------------------------------------
    constructor(pTransactionService: TransactionService)
    {
        this.transactionService = pTransactionService
    }

    //--------------------------------------------------------------------------
    // Controller Methods Section
    //--------------------------------------------------------------------------
    @Get()
    async getTransactions()
    {
        return this.transactionService.getTransactions()
    }
    //--------------------------------------------------------------------------
    @Get('/:id')
    async getTransaction(pId: string)
    {
        return this.transactionService.getTransaction(pId)
    }
    //--------------------------------------------------------------------------
    @Post()
    async createTransaction(@Body() pTransaction: any)
    {
        return this.transactionService.createTransaction(pTransaction)
    }
    //--------------------------------------------------------------------------
    @Put('/:id')
    async updateTransaction(pId: string, @Body() pTransaction: any)
    {
        return this.transactionService.updateTransaction(pId, pTransaction)
    }
    //--------------------------------------------------------------------------
    @Delete('/:id')
    async deleteTransaction(pId: string)
    {
        return this.transactionService.deleteTransaction(pId)
    }
}
