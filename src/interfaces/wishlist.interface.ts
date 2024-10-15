import { Document } from 'mongoose';

export interface IWishList extends Document {
    userId: string,
    books: {
        bookId: string;
        discountPrice: number;
        bookName: string;
        bookImage: string;
        author: string;
        price: number;
    }[]   
}