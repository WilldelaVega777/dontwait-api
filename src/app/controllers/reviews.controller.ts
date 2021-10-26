//-------------------------------------------------------------------------------
// Imports Section
//-------------------------------------------------------------------------------
import { Controller }                       from '@nestjs/common'
import { Body }                             from '@nestjs/common'
import { Get   }                            from '@nestjs/common'
import { Post  }                            from '@nestjs/common'
import { Put   }                            from '@nestjs/common'
import { Delete }                           from '@nestjs/common'
import { CreateReviewDto }                from '../models/dto/create/create-review.dto'
import { UpdateReviewDto }                from '../models/dto/update/update-review.dto'
import { ReviewService }                  from '../services/review.service'

//-------------------------------------------------------------------------------
// Controller Definition Section
//-------------------------------------------------------------------------------
@Controller('Reviews')
export class ReviewsController {

    //--------------------------------------------------------------------------
    // Private Fields Section
    //--------------------------------------------------------------------------
    private readonly reviewService: ReviewService

    //--------------------------------------------------------------------------
    // Constructor Method Section
    //--------------------------------------------------------------------------
    constructor(pReviewService: ReviewService)
    {
        this.reviewService = pReviewService
    }

    //--------------------------------------------------------------------------
    // Public Methods Section
    //--------------------------------------------------------------------------
    @Get()
    public async getAllReviews()
    {
        return this.reviewService.getReviews()
    }
    //--------------------------------------------------------------------------
    @Get(':id')
    public async getReviewById(pReviewId: string)
    {
        return this.reviewService.getReview(pReviewId)
    }
    //--------------------------------------------------------------------------
    @Post()
    public async createReview(@Body() pReviewDto: CreateReviewDto)
    {
        return this.reviewService.createReview(pReviewDto)
    }
    //--------------------------------------------------------------------------
    @Put(':id')
    public async updateReview(@Body() pReviewDto: UpdateReviewDto)
    {
        return this.reviewService.updateReview(pReviewDto.id, pReviewDto)
    }
    //--------------------------------------------------------------------------
    @Delete(':id')
    public async deleteReview(pId: string)
    {
        return this.reviewService.deleteReview(pId)
    }
}
