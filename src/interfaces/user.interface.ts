import { Document } from 'mongoose';

export interface IUser extends Document {
  _id: string;
  FullName: string;
  EmailId: string;
  Password: string;
  MobileNo: string;
  Role: string;
}
