//-------------------------------------------------------------------------------
// Imports Section
//-------------------------------------------------------------------------------
import { Injectable }                   from '@nestjs/common'
import { Model }                        from 'mongoose'
import { InjectModel }                  from '@nestjs/mongoose'
import { ITransaction }                 from '../models/interfaces/ITransaction'

import { CreateTransactionDto }         from '../models/dto/create/create-transaction.dto'
import { UpdateTransactionDto }         from '../models/dto/update/update-transaction.dto'

//-------------------------------------------------------------------------------
// Service Definition Section
//-------------------------------------------------------------------------------
@Injectable()
export class TransactionService
{
    //---------------------------------------------------------------------------
    // Private Fields Section
    //---------------------------------------------------------------------------
    private readonly transactionModel: Model<ITransaction>

    //---------------------------------------------------------------------------
    // Constructor Method Section
    //---------------------------------------------------------------------------
    constructor(@InjectModel('Transaction') pTransactionModel: Model<ITransaction>)
    {
        this.transactionModel = pTransactionModel
    }

    //--------------------------------------------------------------------------
    // Service Methods Section
    //--------------------------------------------------------------------------
    public async getTransactions(): Promise<ITransaction[]>
    {
        return this.transactionModel.find()
    }
    //---------------------------------------------------------------------------
    public async getTransaction(id: string): Promise<ITransaction>
    {
        return this.transactionModel.findById(id)
    }
    //---------------------------------------------------------------------------
    public async createTransaction(transaction: CreateTransactionDto): Promise<ITransaction>
    {
        const newTransaction = new this.transactionModel(transaction)
        return newTransaction.save()
    }
    //---------------------------------------------------------------------------
    public async updateTransaction(id: string, transaction: UpdateTransactionDto): Promise<ITransaction>
    {
        return this.transactionModel.findByIdAndUpdate(id, transaction, { new: true })
    }
    //---------------------------------------------------------------------------
    public async deleteTransaction(id: string): Promise<ITransaction>
    {
        return this.transactionModel.findByIdAndRemove(id)
    }
}
