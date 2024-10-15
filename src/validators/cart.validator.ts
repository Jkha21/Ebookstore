import Joi from '@hapi/joi';
import { Request, Response, NextFunction } from 'express';

class CartValidator{

    public AddItem = (req: Request, res: Response, next: NextFunction): void => {
        const schema = Joi.object({
            _id: Joi.string().required()
        });
        const {error} = schema.validate(req.body);
        if(error){
            next(error);
        }
        next();
    };

    public DeleteItem = (req: Request, res: Response, next: NextFunction): void => {
        const schema = Joi.object({
            _id: Joi.string().required()
        });
        const {error} = schema.validate(req.body);
        if(error){
            next(error);
        }
        next();
    }

    public UpdateItem = (req: Request, res: Response, next: NextFunction): void => {
        const schema = Joi.object({
            _id: Joi.string().required(),
        });
        const {error} = schema.validate(req.body);
        if(error){
            next(error);
        }
        next();
    }

}

export default CartValidator;