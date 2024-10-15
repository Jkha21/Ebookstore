import { NextFunction, Request, Response } from "express";

const AdminCheck = (req: Request, res: Response, next: NextFunction): void =>{
    if(req.path === "admin"){
        next();
    };
    res.status(400).json({
        code: "400",
        data: "",
        "message": "These functions are for admin only"
    });
}

export default AdminCheck;