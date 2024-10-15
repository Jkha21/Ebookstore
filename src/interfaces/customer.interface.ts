import { Document } from 'mongoose';

export interface ICustomer extends Document {
    userId: string,
    FullName: string,
    EmailId: string,
    MobileNo: string,
    Password: string,
    AddressDetails: {

        Address: string,
        City: string,
        State: string,
        PostalCode: number,
        Type: string
        
    }[]

}