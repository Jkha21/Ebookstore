import { Document } from 'mongoose';

export interface IOrder extends Document {
    EmailId: string,
    MobileNo: string,
    Address: string
}