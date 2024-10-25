import Cart from "../models/cart.model";
import Book from "../models/book.model";
import { log } from "winston";
import { Types} from 'mongoose';

class CartService {

    public GetItems = async(_id: string): Promise<any> =>{
        const list = await Cart.find({userId: _id});
        return list;
    }

    public AddItemCart = async(body: any, id: string): Promise<any> =>{
        const user = await Cart.findOne({userId: id});
        const {_id, bookImage, bookName, discountPrice, price, quantity, author} = body;
        const bookObj  = {bookId: _id, discountPrice, price, author, quantity, bookImage, bookName};
        if(user){
            user.totalPrice += price;
            user.totalQuantity += quantity;
            user.totalDiscountPrice += discountPrice;
            user.books.push(bookObj);
            user.save();
            return user;
        }else{
            let totalPrice = price*quantity;
            let totalQuantity = quantity;
            let totalDiscountPrice = discountPrice*quantity;
            const user = await Cart.create({userId: id, books: [bookObj], totalPrice, totalQuantity, totalDiscountPrice});
            console.log(user);
            return user;
        }
    }

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
                user.books.push({bookId, bookName, bookImage, author, price, quantity, discountPrice});
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
            user.books.push({bookId, bookName, bookImage, author, quantity, price, discountPrice});
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

    public UpdateItem = async (_id: string, body: any): Promise<any> =>{
        try{
            console.log(_id, body);
            const user =  await Cart.findOne({userId: _id});
            console.log(user);
            const updateBook = user.books.find(book => book.bookId === body._id);
            user.totalQuantity += (body.quantity - updateBook.quantity);
            updateBook.quantity = body.quantity;
            user.save();
            return user;
        }catch(error){
            console.log(error);
        }
        
    }

}

export default CartService;