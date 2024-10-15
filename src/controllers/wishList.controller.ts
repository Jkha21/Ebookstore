import HttpStatus from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
import WishListService from '../services/wishList.service';

class WishListController {
    public WishListService  = new WishListService();

    public AddItem = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
        try{
            const data = await this.WishListService.AddItem(req.body.userId, req.params.id);
            res.status(HttpStatus.CREATED).json({
                code: HttpStatus.CREATED,
                data: data,
                message: "Added to the wishlist"
            })
        }catch(error){
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                code: HttpStatus.INTERNAL_SERVER_ERROR,
                data: "",
                message: "Internal Server Error"
            })
        }
    };


    public RemoveItem = async(req: Request, res: Response, next: NextFunction): Promise<void> =>{
        try{
            const data = await this.WishListService.RemoveItem(req.body.userId, req.params.id);
            res.status(HttpStatus.OK).json({
                code: HttpStatus.OK,
                data: data,
                message: "Removed from the wishlist"
            })
        }catch(error){
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                code: HttpStatus.INTERNAL_SERVER_ERROR,
                data: "",
                message: "Internal Server Error"
            })
        }
    };
}

export default WishListController;