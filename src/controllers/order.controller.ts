import HttpStatus from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
import OrderService from '../services/order.service';

class OrderController {
    public OrderService = new OrderService();

    public Checkout = async(req: Request, res: Response, next: NextFunction): Promise<void> =>{
        try{

            const order = await this.OrderService.Checkout(req.body);
            res.status(HttpStatus.CREATED).json({
                code: HttpStatus.CREATED,
                data: order,
                message: "Order Placed"
            })
        }catch(error){
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                code: HttpStatus.INTERNAL_SERVER_ERROR,
                data: "",
                message: "Internal Server Error"
            })
        }
    };

    public OrderItems = async(req: Request, res: Response, next: NextFunction): Promise<void> =>{
        try{
            const data = await this.OrderService.OrderItems(req.body.userId);
            res.status(HttpStatus.OK).json({
                code: HttpStatus.OK,
                data: data,
                message: "Fetched Order list"
            })
        }catch(error){
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                code: HttpStatus.INTERNAL_SERVER_ERROR,
                data: "",
                message: "Internal Server Error"
            })
        }
    }

}

export default OrderController;