import Joi from '@hapi/joi';
import { Request, Response, NextFunction } from 'express';

class UserValidator {
  public SignUpValidate = (req: Request, res: Response, next: NextFunction): void => {
    const schema = Joi.object({
      FullName: Joi.string().min(4).required(),
      EmailId: Joi.string().email().pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).required(),
      Password: Joi.string().min(8).required(),
      MobileNo: Joi.string().pattern(/^\d{10}$/).required()
    });
    const { error } = schema.validate(req.body);
    if (error) {
      next(error);
    }
    next();
  };


  public LoginUpValidate = (req: Request, res: Response, next: NextFunction): void => {
    const schema = Joi.object({
      EmailId: Joi.string().email().pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).required(),
      Password: Joi.string().min(8).required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
      next(error);
    }
    next();
  };


  public ForgetPwdEmailValidate = (req: Request, res: Response, next: NextFunction): void => {
    const schema = Joi.object({
      EmailId: Joi.string().email().pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
      next(error);
    }
    next();
  };


  public ResetPwdValidate = (req: Request, res: Response, next: NextFunction): void => {
    const schema = Joi.object({
      Password: Joi.string().min(8).required(),
      Token: Joi.string().required()
    });
    const { error } = schema.validate(req.body);
    if (error) {
      next(error);
    }
    next();
  };
}

export default UserValidator;
