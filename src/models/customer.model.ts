import { Schema, Types, model } from 'mongoose';
import { ICustomer } from '../interfaces/customer.interface';

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
)


const customerSchema = new Schema(
  {
    userId: {
      type: Types.ObjectId,
      required: true,
      unique: true
    },
    FullName: {
        type: String
    },
    EmailId: {
        type: String
    },
    MobileNo: {
        type: String
    },
    Password: {
        type: String
    },
    AddressDetails: {
        type: [AddressDetailsSchema],
        default: []
    }
  },
  {
    timestamps: true
  }
);

export default model<ICustomer>('Customer', customerSchema);
