import { Document, Types } from 'mongoose';
import { IBook } from './book.interace';

export interface ICart extends Document {

  userId: Types.ObjectId;
  books: {
    bookId: string;
    discountPrice: number;
    bookName: string;
    bookImage: string;
    author: string;
    quantity: number;
    price: number;
    description: String;
    
  }[];
  totalPrice: number;
  totalDiscountPrice: number;
  totalQuantity: number;
}
