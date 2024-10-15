/* eslint-disable @typescript-eslint/no-explicit-any */
import HttpStatus from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
import UserTokenUtil from '../utils/token.util';


/**
 * Middleware to authenticate if user has a valid Authorization token
 * Authorization: Bearer <token>
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export const userAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    let bearerToken = req.header('Authorization');
    if (!bearerToken)
      throw {
        code: HttpStatus.BAD_REQUEST,
        message: 'Authorization token is required'
      };
    bearerToken = bearerToken.split(' ')[1];

    const user: any = await UserTokenUtil.verifyToken(bearerToken, process.env.SECRET_KEY_0)
    if(req.path === "admin"){
      req.body.admin_user_id = user._id;
    }else{
      req.body.userId = user._id;
    }
    next();
  } catch (error) {
    next(error);
  }
};


// {
//   "code": 201,
//   "data": {
//     "Role": "Customer",
//     "_id": "670cbc154d8f5c4ecc935807",
//     "FullName": "gdjhjabhkdjs",
//     "EmailId": "gdjhbjnkajshfdfkj@gam.com",
//     "Password": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbElkIjoiZ2RqaGJqbmthanNoZmRma2pAZ2FtLmNvbSIsIl9pZCI6IjY3MGNiYzE1NGQ4ZjVjNGVjYzkzNTgwNyIsImlhdCI6MTcyODg4NzkwNiwiZXhwIjoxNzI4OTc0MzA2fQ.3zeewDBI8cg5wxZZxCn5WV2JxuzQlsZyGV1qBym0F6g",
//     "MobileNo": "6357689921",
//     "createdAt": "2024-10-14T06:37:10.025Z",
//     "updatedAt": "2024-10-14T06:37:10.025Z",
//     "__v": 0
//   },
//   "message": "User created successfully"
// }
// {
//   "code": 202,
//   "data": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbElkIjoiaGdqaGpra3huY2JoZ2pAaGdobW1uLmNvbSIsImlhdCI6MTcyODg4NzA3OSwiZXhwIjoxNzI4ODg3OTc5fQ.fhCB_QBXHQoDBLIapgtUrj8_CbiikbloV8gocq9pfaY",
//   "message": "Reset Password sent successfully"
// }