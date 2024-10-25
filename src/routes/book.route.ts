import express, { IRouter } from 'express';
import BookController from '../controllers/book.controller';
import BookValidator from '../validators/book.validator';
import { userAuth } from '../middlewares/auth.middleware';
import AdminCheck from '../middlewares/admincheck.middleware';

class BookRoute {
    private BookController = new BookController();
    private BookValidator = new BookValidator();
    private router = express.Router();
    constructor(){
        this.routes();
    }

    private routes = () =>{
        
        this.router.delete(
            '/delbook/:id',
            AdminCheck,
            userAuth,
            this.BookValidator.ValidateId,
            this.BookController.DelBook
        )

        this.router.put(
            '/updatebook/:id',
            AdminCheck,
            userAuth,
            this.BookValidator.ValidateId,
            this.BookController.UpdateBook
        );

        this.router.get(
            '/getbook/:id',
            userAuth,
            this.BookValidator.ValidateId,
            this.BookController.GetBook
        )

        this.router.get(
            '/getallbooks',
            // userAuth,
            this.BookController.GetAllBooks
        )
        
    }

    public getRoutes = (): IRouter => {
        return this.router;
      };
}

export default BookRoute;