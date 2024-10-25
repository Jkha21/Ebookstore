import express, {IRouter} from 'express';
import OrderController from '../controllers/order.controller';
import { userAuth } from '../middlewares/auth.middleware';


class OrderRoute {
    private OrderController = new OrderController();
    private router = express.Router();

    constructor(){
        this.routes();
    }

    private routes = () =>{

        this.router.post(
            '/addItem',
            userAuth,
            this.OrderController.Checkout
        )

        this.router.get(
            "",
            userAuth, 
            this.OrderController.OrderItems
        )
    }

    public getRoutes = (): IRouter =>{
        return this.router;
    }
}

export default OrderRoute;