import { Schema, model } from "mongoose";
import { IOrder } from "../interfaces/order.interface";


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
        description: {
          type: String
        }
    }
  );

const AddressDetailsSchema = new Schema(
{
    Address: {
        type: String
    },
    City: {
        type: String
    },
    State: {
        type: String
    },
    PostalCode: {
    type: Number
    },
    Type: {
        type: String
    }

    }
  );
  
  

const orderSchema = new Schema(
    {
        userId: {
            type: String
        },
        books: {
            type: [bookSchema],
            default: []
        },
        totalPrice: {
            type: Number
        },
        totalDiscountPrice: {
            type: Number
        },
        totalQuantity: {
            type: Number
        },
        paymentMethod: {
            type: String
        },
        shippingAddress: {
            type: [AddressDetailsSchema],
            default: []
        }
    }
)

export default model<IOrder>('Order', orderSchema);