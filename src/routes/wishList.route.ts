import express, {IRouter} from 'express';
import WishListController from '../controllers/wishList.controller';
import { userAuth } from '../middlewares/auth.middleware';


class WishListRoute {
    private WishListController = new WishListController();
    private router = express.Router();

    constructor(){
        this.routes();
    }
    private routes = () => {

        this.router.get(
            "", 
            userAuth, 
            this.WishListController.GetWishlist
        )


        this.router.post(
            '/addItem',
            userAuth,
            this.WishListController.AddItem
        );

        this.router.delete(
            '/delItem/:id',
            userAuth,
            this.WishListController.RemoveItem
        )

    }

    public getRoutes = (): IRouter =>{
        return this.router;
    };
    
}

export default WishListRoute;