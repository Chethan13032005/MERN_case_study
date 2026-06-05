import { JsonController, Get, Post, Param, Body, UseBefore } from "routing-controllers";
import {AllergyMiddleware} from "../middlewares/AllergyMiddleware";
import {Order} from "../models/Order";
import {orders} from "../data/mockDb";
import { validate } from "class-validator";

@JsonController("/orders")
export class OrderController {
    @Get("/")
    getAll() {
        return orders;
    }

    @Get("/:id")
    getOne(@Param("id") id: string) {
        const order = orders.find(o => o.id === id);
        if (!order) {
            return {status: "error", message: "Order not found"};
        }
        return {status: "success", data: order};
    }
    

@UseBefore(AllergyMiddleware)
    @Post("/")
    create(@Body({validate:true}) order: Order) {
        const newOrder : Order = {
            ...order,
            id: (orders.length + 1).toString()
        };
        orders.push(newOrder);
        return {status: "success", data: newOrder};
    }
}