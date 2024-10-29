import HttpStatus from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
import CustomerService from '../services/customer.service';

class CustomerController {
    public CustomerService = new CustomerService();

    public AddCustomer = async(req: Request, res:Response, next: NextFunction): Promise<void> =>{
        try{
            const user = await this.CustomerService.AddCustomer(req.body);
            res.status(HttpStatus.CREATED).json({
                code: HttpStatus.CREATED,
                data: user,
                message: "Added Customer Details"
            })
        }catch(error){
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                code: HttpStatus.INTERNAL_SERVER_ERROR,
                data: "",
                message: "Internal Server Error"
            })
        }
    };

    public EditCustomer = async(req: Request, res: Response, next: NextFunction): Promise<void> =>{
        try{

            const user = await this.CustomerService.EditCustomer(req.body.userId, req.body);
            res.status(HttpStatus.OK).json({
                code: HttpStatus.OK,
                data: user,
                message: "Edited the Customer Details"
            });
        }catch(error){
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                code: HttpStatus.INTERNAL_SERVER_ERROR,
                data: "",
                message: "Internal Server Error"
            })
        }
    };

    public GetCustomer = async(req: Request, res:Response, next: NextFunction): Promise<void> =>{
        try{
            const user = await this.CustomerService.GetCustomer(req.body.userId);
            res.status(HttpStatus.CREATED).json({
                code: HttpStatus.CREATED,
                data: user,
                message: "Fetched Customer Details"
            })
        }catch(error){
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                code: HttpStatus.INTERNAL_SERVER_ERROR,
                data: "",
                message: "Internal Server Error"
            })
        }
    };

    public AddAddress = async(req: Request, res: Response, next: NextFunction): Promise<void> =>{
        try{

            const user = await this.CustomerService.EditAddress(req.body.userId, req.body);
            res.status(HttpStatus.OK).json({
                code: HttpStatus.OK,
                data: user,
                message: "Added The Address Details"
            });
        }catch(error){
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                code: HttpStatus.INTERNAL_SERVER_ERROR,
                data: "",
                message: "Internal Server Error"
            })
        }
    };
}

export default CustomerController;