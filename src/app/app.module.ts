//-------------------------------------------------------------------------------
// Imports Section
//-------------------------------------------------------------------------------
import { Module }                   from '@nestjs/common'

// Controllers
import { AppController }            from './controllers/app.controller'
import { CategoriesController }     from './controllers/categories.controller'
import { MenuItemsController }      from './controllers/menu-items.controller'
import { OrdersController }         from './controllers/orders.controller'
import { RestaurantsController }    from './controllers/restaurants.controller'
import { ReviewsController }        from './controllers/reviews.controller'
import { TransactionsController }   from './controllers/transactions.controller'
import { UsersController }          from './controllers/user.controller'

// Services
import { AppService }               from './services/app.service'
import { CategoryService }          from './services/category.service'
import { MenuItemService }          from './services/menuitem.service'
import { OrderService }             from './services/order.service'
import { RestaurantService }        from './services/restaurant.service'
import { ReviewService }            from './services/review.service'
import { TransactionService }       from './services/transaction.service'
import { UserService }              from './services/user.service'

// Database
import { MongooseModule }           from '@nestjs/mongoose'
import { UserSchema }               from './models/schemas/user'

// Schemas
import { TransactionSchema }        from './models/schemas/transaction'
import { ReviewSchema }             from './models/schemas/review'
import { RestaurantSchema }         from './models/schemas/restaurant'
import { OrderSchema }              from './models/schemas/order'
import { MenuItemSchema }           from './models/schemas/menuItem'
import { CategorySchema }           from './models/schemas/category'

//-------------------------------------------------------------------------------
// Module Definition Section
//-------------------------------------------------------------------------------
@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost/dontwait', {
            useNewUrlParser: true
        }),
        MongooseModule.forFeature([
            { name: 'Category',     schema: CategorySchema },
            { name: 'MenuItem',     schema: MenuItemSchema },
            { name: 'Order',        schema: OrderSchema },
            { name: 'Restaurant',   schema: RestaurantSchema },
            { name: 'Review',       schema: ReviewSchema },
            { name: 'Transaction',  schema: TransactionSchema },
            { name: 'User',         schema: UserSchema }
        ])
    ],
    controllers: [
        AppController,
        CategoriesController,
        MenuItemsController,
        OrdersController,
        RestaurantsController,
        ReviewsController,
        TransactionsController,
        UsersController
    ],
    providers: [
        AppService,
        CategoryService,
        MenuItemService,
        OrderService,
        RestaurantService,
        ReviewService,
        TransactionService,
        UserService
    ],
})
export class AppModule { }
