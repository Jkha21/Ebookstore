import express, { IRouter } from 'express';
import CartController from '../controllers/cart.controller';
import CartValidator from '../validators/cart.validator';
import { userAuth } from '../middlewares/auth.middleware';


class CartRoute{
    private CartController = new CartController();
    private CartValidator = new CartValidator();
    private router = express.Router();
    constructor(){
        this.routes();
    }

    private routes = () =>{

        this.router.get(
            '',
            userAuth,
            this.CartController.GetItems
        );

        this.router.post(
            "/addCart",
            userAuth,
            this.CartController.AddItemCart
        )

        this.router.get(
            '/addItem/:id', 
            userAuth,
            // this.CartValidator.AddItem,
            this.CartController.AddItem
        );

        this.router.delete(
            '/delItem/:id',
            userAuth,
            // this.CartValidator.DeleteItem,
            this.CartController.DelItem
        );

        this.router.put(
            '/updateItem/',
            userAuth,
            // this.CartValidator.UpdateItem,
            this.CartController.UpdateItem
        );

    }

    public getRoutes = (): IRouter =>{
        return this.router;
    }

}

export default CartRoute;