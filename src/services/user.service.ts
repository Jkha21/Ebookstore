import User from '../models/user.model';
import { IUser } from '../interfaces/user.interface';
import UserTokenUtil from '../utils/token.util';
import { sendResetPasswordEmail } from '../utils/mail.util';
import bcrypt from 'bcrypt';

class UserService {

  //create new user
  public SignUp = async (body: IUser): Promise<IUser> => {
    const data = await User.create(body);
    return data;
  };

  // login user
  public Login = async (EmailId: string, Password: string): Promise<any> => {
    const user = await User.findOne({EmailId}).exec();
    if(user){
      const validate = await bcrypt.compare(Password, user.Password); 
    }
    return user;
  };


  // forgetPassword for the user
  public ForgetPassword = async (EmailId: string): Promise<string> => {
      const user = await User.findOne({ EmailId: EmailId });
      if(user){
        const resetToken = await UserTokenUtil.generateToken({EmailId: user.EmailId}, process.env.SECRET_KEY_1, "15min");
        await sendResetPasswordEmail(EmailId, resetToken);
        await user.save();
        return resetToken;
      }
      return null;
  };


  // reset the password
  public ResetPassword = async (NewPassword: string, Token: string): Promise<boolean> => {
      const details = await UserTokenUtil.verifyToken(Token, process.env.SECRET_KEY_1) as {EmailId: string};
      console.log(details);
      
      const user = await User.findOne({ EmailId: details.EmailId});
      if(user){
        const hashPassword = await bcrypt.hash(NewPassword, 10);
        console.log(hashPassword)
        console.log(user);
        
        user.Password = hashPassword;
        await user.save();
        return true;
      }
      return false;
    };

  
}

export default UserService;
