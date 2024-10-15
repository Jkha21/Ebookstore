import { Document, Types } from 'mongoose';

export interface IBook extends Document {

  admin_user_id: string;
  bookName: string;
  discountPrice: number;
  bookImage: string;
  author: string;
  quantity: number;
  price: number;
  description: string

}
