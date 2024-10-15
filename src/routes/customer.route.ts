import express, {IRouter} from 'express';
import CustomerController from '../controllers/customer.controller';
import { userAuth } from '../middlewares/auth.middleware';

class CustomerRoute{
    private CustomerController = new CustomerController();
    private router = express.Router();
    constructor(){
        this.routes();
    };
    private routes = () => {

        this.router.post(
            '/',
            userAuth,
            this.CustomerController.AddCustomer
        );

        this.router.put(
            '/edit',
            userAuth,
            this.CustomerController.EditCustomer
        );
    }

    public getRoutes = (): IRouter =>{
        return this.router;
    }

}

export default CustomerRoute;