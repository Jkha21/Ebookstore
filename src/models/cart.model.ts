import { Schema, Types, model } from 'mongoose';
import { ICart } from '../interfaces/cart.interface';

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
    quantity: {
      type: Number,
      default: 0
    },
    price: {
      type: Number
    },
    bookName: {
      type: String
    }
  }
)


const cartSchema = new Schema(
  {
    userId: {
      type: String,
      required: true
    },
    books: {
      type: [bookSchema],
      default: []
    },
    totalPrice: {
      type: Number,
      default: 0
    },
    totalDiscountPrice: {
      type: Number,
      default: 0
    },
    totalQuantity: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true,
    collection: "carts"
  }
);

export default model<ICart>('Cart', cartSchema);
