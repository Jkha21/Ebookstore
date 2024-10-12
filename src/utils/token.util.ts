import jwt from 'jsonwebtoken';

class UserTokenUtil {
    public static async generateToken(body: object, secretKey: string, time: string){
        const token = jwt.sign(body, secretKey, {expiresIn: time});
        return token;
    }

    public static async verifyToken(token: string, secretKey: string): Promise<object> {
       const  payload = jwt.verify(token, secretKey);
       return payload as object;
    }
}

export default UserTokenUtil;