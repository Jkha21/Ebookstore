import { Schema, model } from 'mongoose';
import { IUser } from '../interfaces/user.interface';

const userSchema = new Schema(
  {
    
    FullName: {
      type: String,
      required: true
    },
    EmailId: {
      type: String,
      required: true
    },
    Password: {
      type : String,
      required: true
    },
    MobileNo: {
      type: String,
      required: true
    },
    Role: {
      type: String,
      default: "Customer"
    }
  },
  {
    timestamps: true
  }
);

export default model<IUser>('User', userSchema);
