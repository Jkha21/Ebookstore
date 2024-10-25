import { ICustomer } from "../interfaces/customer.interface";
import Customer from "../models/customer.model";


class CustomerService{

    public AddCustomer = async(body: ICustomer): Promise<any> =>{
        const user = await Customer.create(body);
        return user;
    }

    public EditCustomer = async(id: string, body: Object): Promise<any> =>{
        const user = await Customer.findByIdAndUpdate(id, body, {new: true});
        return user;
    }

    public GetCustomer = async(id: string): Promise<any> =>{
        const user = await Customer.find({userId: id});
        return user;
    }

}

export default CustomerService;