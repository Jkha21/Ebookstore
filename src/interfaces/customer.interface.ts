import { Document } from 'mongoose';

export interface ICustomer extends Document {
    FullName: string,
    MobileNo: string,
    AddressDetails: {

        Address: string,
        City: string,
        State: string,
        Type: string
        
    }[]

}