import Joi from "@hapi/joi";
import { Request, Response, NextFunction } from "express";
import mongoose from 'mongoose';

class BookValidator {

    public GetAllBooks = (req: Request, res: Response, next: NextFunction): void =>{
        const schema = Joi.object({
            admin_user_id: Joi.string().required()
        });
        const {error} = schema.validate(req.body);
        if(error){
            next(error);
        }
        next();
    };

    public DelBook = (req: Request, res: Response, next: NextFunction): void =>{
        const schema = Joi.object({
            _id: Joi.string().required()
        });
        const {error} = schema.validate(req.body);
        if(error){
            next(error);
        }
        next();
    };

    public UpdateBook = (req: Request, res: Response, next: NextFunction): void =>{
        const schema = Joi.object({
            _id: Joi.string().required()
        });
        const {error} = schema.validate(req.body);
        if(error){
            next(error);
        };
        next();
    };

    public ValidateId = (req: Request, res: Response, next: NextFunction): any =>{
        const schema = Joi.object({
            id: Joi.string().custom((value, helpers) => {
              if (!mongoose.Types.ObjectId.isValid(value)) {
                return helpers.error('any.invalid'); 
              }
              return value; 
            }).required()
          });
          const { error } = schema.validate({ id: req.params.id });
          if (error) {
            return res.status(400).send({ error: error.details[0].message }); 
          }
          next();
    }

}

export default BookValidator;