import Book from "../models/book.model";
import { IBook } from "../interfaces/book.interace";

class BookService {

    public DelBook = async (_id: string): Promise<Object> =>{
        const data = await Book.findByIdAndDelete(_id);
        return data;
    };

    public UpdateBook = async (_id: string, bookDetails: object): Promise<Object> =>{
        const data = await Book.findByIdAndUpdate(_id, bookDetails, {new: true});
        return data;
    }

    public GetAllBooks = async (): Promise<Object[]> =>{
        const booksArray = await Book.find();
        return booksArray;
    }

    public GetBook = async (_id: string): Promise<IBook> =>{
        const data = await Book.findOne({_id}).exec();
        return data;
    }

}

export default BookService;