import { Schema, Types, model } from 'mongoose';
import { IWishList } from '../interfaces/wishList.interface';

const bookSchema = new Schema(
  {
    bookId: {
      type: String
    },
    discountPrice: {
      type: Number,
      default: 0
    },
    bookImage: {
      type: String,
      default: null
    },
    author: {
      type: String
    },
    price: {
      type: Number
    },
    bookName: {
      type: String
    }
  }
)


const wishListSchema = new Schema(
  {
    userId: {
      type: Types.ObjectId,
      required: true
    },
    books: {
      type: [bookSchema],
      default: []
    }
  },
  {
    timestamps: true,
  }
);

export default model<IWishList>('WishList', wishListSchema);
