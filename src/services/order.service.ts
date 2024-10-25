import { ObjectId } from "mongoose";
import { IOrder } from "../interfaces/order.interface";
import Order from "../models/order.model";

class OrderService {

    public Checkout = async(body: IOrder): Promise<any> =>{
        const user = await Order.create(body);
        return user;
    };

    public OrderItems = async(id: ObjectId): Promise<any> => {
        const data = await Order.find({userId: id});
        return data;
    }

}

export default OrderService;