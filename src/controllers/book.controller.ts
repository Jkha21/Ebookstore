import HttpStatus from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
import BookService from '../services/book.service';

class BookController{
    public BookService = new BookService();

    public GetAllBooks = async(req: Request, res: Response, next: NextFunction): Promise<void> =>{
        try{
            console.log(req.body.admin_user_id);
            const data = await this.BookService.GetAllBooks(req.body.admin_user_id);
            res.status(HttpStatus.OK).json({
                code: HttpStatus.OK,
                data: data,
                message: "All Books fetched"
            });
        }catch(error){
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                code: HttpStatus.INTERNAL_SERVER_ERROR,
                data: "",
                message: "Internal Server Error"
            });
        }
    }

    public DelBook = async(req: Request, res: Response, next: NextFunction): Promise<void> =>{
        try{
            const data = await this.BookService.DelBook(req.params.id);
            res.status(HttpStatus.OK).json({
                code: HttpStatus.OK,
                data: data,
                message: "Deleted the BookItem"
            })
        }catch(error){
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                code: HttpStatus.INTERNAL_SERVER_ERROR,
                data: "",
                message: "Internal Server Error"
            });
        }
    }

    public UpdateBook = async(req: Request, res: Response, next: NextFunction): Promise<void> =>{
        try{
            const data = await this.BookService.UpdateBook(req.params.id, req.body);
            res.status(HttpStatus.OK).json({
                code: HttpStatus.OK,
                data: data,
                message: "Updated the Book"
            })
        }catch(error){
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                code: HttpStatus.INTERNAL_SERVER_ERROR,
                data: "",
                message: "Interval Server Error"
            });
        }
    }

    public GetBook = async(req: Request, res: Response, next: NextFunction): Promise<void> =>{
        try{
            console.log(req.params.id);
            const data = await this.BookService.GetBook(req.params.id);
            res.status(HttpStatus.OK).json({
                code: HttpStatus.OK,
                data: data,
                message: "Book details"
            })
        }catch(error){
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                code: HttpStatus.INTERNAL_SERVER_ERROR,
                data: "",
                message: "Internal Server Error"
            });
        }
    }

}

export default BookController;