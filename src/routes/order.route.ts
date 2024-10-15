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
            '',
            userAuth,
            this.OrderController.Checkout
        )
    }

    public getRoutes = (): IRouter =>{
        return this.router;
    }
}

export default OrderRoute;