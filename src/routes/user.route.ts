import express, { IRouter } from 'express';
import userController from '../controllers/user.controller';
import userValidator from '../validators/user.validator';
import HashingPassword from '../utils/hashing.util';

class UserRoutes {
  private UserController = new userController();
  private router = express.Router();
  private UserValidator = new userValidator();
  private UserPasswordEncrypt = new HashingPassword();

  constructor() {
    this.routes();
  }

  private routes = () => {
  
    
    this.router.post(
      '',
      this.UserValidator.SignUpValidate,
      this.UserPasswordEncrypt.EncryptPassword(),
      this.UserController.SignUp
    );


    this.router.post(
      '/login', 
      this.UserValidator.LoginUpValidate,
      this.UserController.Login);


    this.router.post(
      '/forgetPwd',
      this.UserValidator.ForgetPwdEmailValidate,
      this.UserController.ForgetPassword);


    this.router.post(
      '/resetPwd', 
      this.UserValidator.ResetPwdValidate,
      this.UserController.ResetPassword);


  };

  public getRoutes = (): IRouter => {
    return this.router;
  };
}

export default UserRoutes;
