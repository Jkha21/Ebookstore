import { Document } from 'mongoose';

export interface IWishList extends Document {
    userId: string,
    books: {
        bookId: string;
        discountPrice: number;
        bookName: string;
        bookImage: string;
        author: string;
        quantity: number;
        price: number;
        description: String;
    }   
}