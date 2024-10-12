import { createTransport } from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config()

export async function sendResetPasswordEmail(EmailId: string, Token: string): Promise<any> {
    const transporter = createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAILID,
            pass: process.env.PASSWORD
        }
    });


    const mailOptions = {
        to: EmailId,
        from: `${process.env.EMAILID}`,
        subject: "Password Reset",
        text: `Reset your password using this token: ${Token}`,
        html: `<span>Hello,<br/>Click on the given link to reset your password</span><br/>
        <span>Link: <a href="http://localhost:${process.env.APP_PORT}/${process.env.API_VERSION}/${Token}">Click here</a></span>`
    };

    await transporter.sendMail(mailOptions);
}