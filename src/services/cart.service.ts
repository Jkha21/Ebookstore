import Cart from "../models/cart.model";
import { ICart } from "../interfaces/cart.interface";
import HttpStatus from 'http-status-codes';
import CartController from "../controllers/cart.controller";
import Book from "../models/book.model";
import { log } from "winston";

class CartService {

    public AddItem = async (_id: string, bookId: string): Promise<any> =>{
        const user = await Cart.findOne({userId: _id});
        if(user){
            const book = user.books.find(book => bookId === book.bookId);
            if(!book){
                const book = await Book.findOne({_id: bookId});
                const {bookName, bookImage, author, price, description, discountPrice} = book;
                let quantity: number = 1;
                user.totalPrice += book.price;
                user.totalDiscountPrice += book.discountPrice;
                user.books.push({bookId, bookName, bookImage, author, price, description, quantity, discountPrice});
                user.totalQuantity += 1;
                user.save();
            }else{
                book.quantity += 1;
                user.totalPrice += book.price;
                user.totalDiscountPrice += book.discountPrice;
                user.totalQuantity += 1;
                user.save();
            }
            return user;
            
        }else{
            const user = await Cart.create({userId: _id});
            const book = await Book.findOne({_id: bookId});
            let {bookName, bookImage, author, quantity, price, description, discountPrice, ...data} = book;
            quantity = 1;
            user.totalPrice += book.price;
            user.totalDiscountPrice += book.discountPrice;
            user.books.push({bookId, bookName, bookImage, author, quantity, price, description, discountPrice});
            user.totalQuantity += 1;
            user.save();
            return user;
        }
    }

    public DelItem = async (_id: string, bookId: string): Promise<any> =>{
        const user = await Cart.findOne({userId: _id});
        if(user){
            const book = user.books.find(book => bookId === book.bookId);
            if(!book){
                return user;
            }else{
                if(book.quantity === 1){
                    user.books = user.books.filter(book => bookId !== book.bookId);
                    user.totalQuantity -= 1;
                    user.totalPrice -= book.price;
                    user.totalDiscountPrice -= book.discountPrice;
                    user.save();
                    return user;
                }else{
                    book.quantity -= 1;
                    user.totalDiscountPrice -= book.discountPrice;
                    user.totalPrice -= book.price;
                    user.totalQuantity -= 1;
                    user.save();
                    return user;
                }
            }
        }else{
            return false;
        }
    }

    public UpdateItem = async (_id: string, bookId: string, body: Object): Promise<Object> =>{
        const data = await Cart.findByIdAndUpdate(_id, body);
        return data;
    }

}

export default CartService;