import { Document, Types } from 'mongoose';
import { IBook } from './book.interace';

export interface ICart extends Document {

  userId: String;
  books: {
    bookId: string;
    discountPrice: number;
    bookName: string;
    bookImage: string;
    author: string;
    quantity: number;
    price: number;
    
  }[];
  totalPrice: number;
  totalDiscountPrice: number;
  totalQuantity: number;
}
