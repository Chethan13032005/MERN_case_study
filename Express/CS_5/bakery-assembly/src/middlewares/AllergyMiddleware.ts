import {Middleware , ExpressMiddlewareInterface} from "routing-controllers";
import type {Request, Response, NextFunction} from "express";

@Middleware({ type: "before" })
export class AllergyMiddleware implements ExpressMiddlewareInterface {
    use(request: Request, response: Response, next: NextFunction){ 
        const { ingredients } = request.body;
        
        if(ingredients && ingredients.includes("peanuts")){
            throw new Error("Peanut allergy alert");
        }
        next();
    }
}