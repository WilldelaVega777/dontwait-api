//-------------------------------------------------------------------------------
// Imports Section
//-------------------------------------------------------------------------------
import { Controller }                       from '@nestjs/common';
import { Get }                              from '@nestjs/common';
import { AppService }                       from '../services/app.service';


//-------------------------------------------------------------------------------
// Controller Section
//-------------------------------------------------------------------------------
@Controller()
export class AppController
{
    //--------------------------------------------------------------------------
    // Constructor Method Section
    //--------------------------------------------------------------------------
    constructor(private readonly appService: AppService) {}

    //--------------------------------------------------------------------------
    // Controller Methods Section
    //--------------------------------------------------------------------------
    @Get('/healthCheck')
    healthCheck(): string
    {
        return this.appService.getHealthCheck()
    }
}
