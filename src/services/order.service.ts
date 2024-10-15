import { IOrder } from "../interfaces/order.interface";
import Order from "../models/order.model";

class OrderService {

    public Checkout = async(body: IOrder): Promise<any> =>{
        const user = await Order.create(body);
        return user;
    };

}

export default OrderService;