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
            '/addItem',
            userAuth,
            this.CustomerController.AddCustomer
        );

        this.router.put(
            '/edit',
            userAuth,
            this.CustomerController.EditCustomer
        );

        this.router.get(
            "",
            userAuth,
            this.CustomerController.GetCustomer
        )

        this.router.put(
            "/addAddress",
            userAuth,
            this.CustomerController.AddAddress
        )
    }

    public getRoutes = (): IRouter =>{
        return this.router;
    }

}

export default CustomerRoute;