//-------------------------------------------------------------------------------
// Imports Section
//-------------------------------------------------------------------------------
import { Injectable }       from '@nestjs/common';
import { Model }            from 'mongoose'
import { InjectModel }      from '@nestjs/mongoose'
import { IReview }          from '../models/interfaces/IReview';

import { CreateReviewDto } from '../models/dto/create/create-review.dto'
import { UpdateReviewDto } from '../models/dto/update/update-review.dto'

//-------------------------------------------------------------------------------
// Service Definition Section
//-------------------------------------------------------------------------------
@Injectable()
export class ReviewService
{
    //---------------------------------------------------------------------------
    // Private Fields Section
    //---------------------------------------------------------------------------
    private readonly reviewModel: Model<IReview>

    //--------------------------------------------------------------------------
    // Constructor Method Section
    //--------------------------------------------------------------------------
    constructor(@InjectModel('Review') pReviewModel: Model<IReview>)
    {
        this.reviewModel = pReviewModel
    }

    //--------------------------------------------------------------------------
    // Public Methods Section
    //--------------------------------------------------------------------------
    public async getReviews(): Promise<IReview[]>
    {
        return this.reviewModel.find()
    }
    //--------------------------------------------------------------------------
    public async getReview(pId: string): Promise<IReview>
    {
        return this.reviewModel.findById(pId)
    }
    //--------------------------------------------------------------------------
    public async createReview(pReview: CreateReviewDto): Promise<IReview>
    {
        const review = new this.reviewModel(pReview)
        return review.save()
    }
    //--------------------------------------------------------------------------
    public async updateReview(pId: string, pReview: UpdateReviewDto): Promise<IReview>
    {
        return this.reviewModel.findByIdAndUpdate(pId, pReview, { new: true })
    }
    //--------------------------------------------------------------------------
    public async deleteReview(pId: string): Promise<IReview>
    {
        return this.reviewModel.findByIdAndRemove(pId)
    }
}
