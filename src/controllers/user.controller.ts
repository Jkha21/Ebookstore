/* eslint-disable @typescript-eslint/no-explicit-any */
import HttpStatus from 'http-status-codes';
import userService from '../services/user.service';
import { Request, Response, NextFunction } from 'express';
import UserTokenUtil from '../utils/token.util';

class UserController {
  public UserService = new userService();


  /**
   * Controller to create new user
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public SignUp = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const userData = await this.UserService.SignUp(req.body);
      res.status(HttpStatus.CREATED).json({
        code: HttpStatus.CREATED,
        data: userData,
        message: 'User created successfully'
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message: `${error}`
      });
    }
  };



  /**
   * Controller to get a user
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public Login = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const userData = await this.UserService.Login(req.body.EmailId, req.body.Password);
      if(userData){
        const {FullName, EmailId, MobileNo, Password, _id} = userData;
        const Token = await UserTokenUtil.generateToken({EmailId, _id, Password}, process.env.SECRET_KEY_0, "24h");
        res.status(HttpStatus.OK).json({
          code: HttpStatus.OK ,
          data: {
            FullName,
            EmailId,
            MobileNo,
            Token
          },
          message: 'Logged in Successfully 🚀🚀🚀'
        });
      }else{
          res.status(HttpStatus.NOT_FOUND).json({
            code: HttpStatus.NOT_FOUND,
            message: 'EmailId not found'
          });
        }
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message: 'Server Error'
      });
    }
  };




  /**
   * Controller to update a user
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public ForgetPassword = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data = await this.UserService.ForgetPassword(req.body.EmailId);
      res.status(HttpStatus.ACCEPTED).json({
        code: HttpStatus.ACCEPTED,
        data: data,
        message: 'Reset Password sent successfully'
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        data: "",
        message: error.message,
      });
    }
  };




  /**
   * Controller to update a user
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public ResetPassword = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const {Password, Token} = req.body;
      await this.UserService.ResetPassword(Password, Token);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: "",
        message: 'Reset Password sent successfully'
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        data: "",
        message: error.message,
      });
    }
  };


}

export default UserController;
 
