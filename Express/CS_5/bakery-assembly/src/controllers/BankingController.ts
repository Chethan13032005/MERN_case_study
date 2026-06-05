import {JsonController, Get, Post, Param, Body} from 'routing-controllers';
import {Order} from '../models/Order';

@JsonController("/banking")
export class BakingController {
    
    @Post("/start")
    startBanking(@Body() order: Order) {
        return {status: "success", message: `Banking process started for order ${order.id}`};
    };

    @Get("/status/:id")
    checkStatus(@Param("id") id: string) {
        return {status: "success", message: `Banking status for order ${id} is: Processing`};
    };
}