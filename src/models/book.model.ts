import { Schema, model } from 'mongoose';
import { IBook } from '../interfaces/book.interace';

const bookSchema = new Schema(
  {
    admin_user_id: {
      type: String,
      required: true
    },
    bookName: {
      type: String,
      required: true,
      unique: true
    },
    discountPrice: {
      type : Number,
      required: true
    },
    bookImage: {
      type: String,
      required: true,
      default: null
    },
    author: {
      type: String,
    },
    quantity: {
        type: Number
    },
    price: {
        type: Number
    },
    description: {
        type: String
    }
  },
  {
    timestamps: true,
    collection: "books"
  }
);

export default model<IBook>('Book', bookSchema);
