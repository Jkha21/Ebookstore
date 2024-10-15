import { Document, ObjectId } from 'mongoose';

export interface IOrder extends Document {
    userId: ObjectId;
    books: Array<{
        bookName: string;
        description: string;
        price: number;
        discountPrice: number;
        bookImage: string;
        quantity: number;
        author: string;
        userId: ObjectId;
    }>;
    totalPrice: number;
    totalDiscountPrice: number;
    totalQuantity: number;
    shippingAddress: {
        addressLine: string;
        city: string;
        state: string;
        postalCode: string;
    };
    paymentMethod: string;
    status: 'pending' | 'shipped' | 'delivered' | 'cancelled';

}