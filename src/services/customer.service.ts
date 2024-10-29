import { ICustomer } from "../interfaces/customer.interface";
import Customer from "../models/customer.model";


class CustomerService{

    public AddCustomer = async (body: ICustomer): Promise<any> => {
        const data = await Customer.find({ userId: body.userId }); 
        let user = null;
        if (data.length === 0) { 
            user = await Customer.create(body);
        } else {
            user = data[0]; 
        }
        return user; 
    }
    

    public EditCustomer = async(id: string, body: Object): Promise<any> =>{
        const user = await Customer.findByIdAndUpdate(id, body);
        return user;
    }

    public GetCustomer = async(id: string): Promise<any> =>{
        const user = await Customer.find({userId: id});
        return user;
    }

    public EditAddress = async(id: string, body: any): Promise<any> =>{
        const user = await Customer.find({userId: id});
        user[0].AddressDetails.push(body);
        user[0].save();
        return user;

    }

}

export default CustomerService;