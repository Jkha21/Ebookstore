import bcrypt from 'bcrypt';
import { Request, Response, NextFunction } from 'express';

class HashingPassword {
    private encrypt = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try{
            const saltrounds = 10;
            const hash = await bcrypt.hash(req.body.Password, saltrounds);
            console.log(hash)
            req.body.Password = hash;
            next();
        } catch(error){
            next(error);
        }
    };

    public EncryptPassword(){
        return this.encrypt;
    }
}

export default HashingPassword;