import HttpStatus from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
import CartService from '../services/cart.service';

class CartController {
    public CartService = new CartService();

    public GetItems = async(req: Request, res: Response, next: NextFunction): Promise<void> =>{
        try{
            const datalist = await this.CartService.GetItems(req.body.userId);
            res.status(HttpStatus.OK).json({
                code: HttpStatus.OK,
                data: datalist,
                message: "Got all Items"
            })
        }catch(error){
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                code: HttpStatus.INTERNAL_SERVER_ERROR,
                message: "Internal Server Error"
            })
        }
    }

    public AddItemCart = async(req: Request, res: Response, next: NextFunction): Promise<void> =>{
        try{
            const bookData = await this.CartService.AddItemCart(req.body, req.body.userId);
            console.log(bookData)
            res.status(HttpStatus.CREATED).json({
                code: HttpStatus.CREATED,
                data: bookData,
                message: "Added the item to the cart"
            })
        }catch(error){
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                code: HttpStatus.INTERNAL_SERVER_ERROR,
                data: "",
                message: "Internal Server Error"
            })
        }
    }

    public AddItem = async(req: Request, res: Response, next: NextFunction): Promise<void> =>{
        try{
            const bookData = await this.CartService.AddItem(req.body.userId, req.body._id);
            res.status(HttpStatus.OK).json({
                code: HttpStatus.OK,
                data: bookData,
                message: 'Added the Item'
            });
        }catch(error){
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                code: HttpStatus.INTERNAL_SERVER_ERROR,
                message: "Internal Server Error"
            });
        };
    }

    public DelItem = async(req: Request, res: Response, next: NextFunction): Promise<void> =>{
        try{
            const bookData = await this.CartService.DelItem(req.body.userId, req.params.id);
            res.status(HttpStatus.OK).json({
                code: HttpStatus.OK ,
                data: bookData,
                message: 'Removed the Item'
              });
        }catch(error){
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                code: HttpStatus.INTERNAL_SERVER_ERROR,
                message: 'Interval Server Error'
            })
        }
    }

    public UpdateItem = async(req: Request, res: Response, next: NextFunction): Promise<void> =>{
        try{
            const updatedData = await this.CartService.UpdateItem(req.body.userId, req.body);
            console.log(updatedData);
            res.status(HttpStatus.OK).json({
                code: HttpStatus.OK,
                data: updatedData,
                message: "Updated data successfully"
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

export default CartController;