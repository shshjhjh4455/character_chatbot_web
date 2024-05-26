import nodemailer from 'nodemailer';
import { findUserProvider } from './db/userdb';
import { checkEmail } from './account/check';
import { createEmailLink, deleteEmailLink, findEmailLink } from './db/emaildb';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL_AUTH,
        pass: process.env.MAIL_PASS,
    },
});

export async function sendEmail(email: string) {
    if (checkEmail(email) != "ok") {//invalid email
        return 400;
    }
    if (await findUserProvider(email, "credentials")) {//already exist email
        return 409;
    }
    const bs64 = btoa(email);//email address encode by base64
    const link = `${process.env.NEXTAUTH_URL}/signup/${bs64}`;
    const mailData = {
        from: process.env.AUTH_USER,
        to: email,
        subject: `Sign up for Character_Chatbot`,
        html: `
        <div style="background-color: #f2f2f2; padding: 15px; border: 1px solid #d9d9d9; border-radius: 8px; max-width: 400px; margin: auto; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
            <div style="text-align: center; padding: 15px;">
                <h1 style="margin: 0; color: #333333;">Character Chatbot</h1>
            </div>
            <div style="text-align: center; padding: 15px;">
                <p style="font-size: 20px; margin: 20px 0; color: #666666;">Sign Up!!</p>
                <a href="${link}" style="background-color: #94beb8; color: white; text-decoration: none; border-radius: 5px; padding: 15px 30px; font-size: 16px; display: inline-block; margin-top: 20px;">
                    Sign up
                </a>
                <p style="font-size: 12px; color: #999999; margin: 20px 0;">Link will expire after 24 hours.</p>
            </div>
        </div>
        `,
    };

    return transporter.sendMail(mailData).then(async () => {
        if (await findEmailLink(email, "signup")) {
            await deleteEmailLink(email, "signup");
        }
        const link = await createEmailLink(email, "signup");
        if (!link) {
            console.log("Email link not created");
            return 500;
        }
        return 200
    });
}

export async function sendEmailForgot(email: string) {
    if (!findUserProvider(email, "credentials")) {//user not exist
        return 409;
    }
    const bs64 = btoa(email);//email address encode by base64
    const link = `${process.env.NEXTAUTH_URL}/reset/${bs64}`;
    const mailData = {
        from: process.env.AUTH_USER,
        to: email,
        subject: `Reset Password in Character_Chatbot`,
        html: `
        <div style="background-color: #f2f2f2; padding: 15px; border: 1px solid #d9d9d9; border-radius: 8px; max-width: 400px; margin: auto; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
            <div style="text-align: center; padding: 15px;">
                <h1 style="margin: 0; color: #333333;">Character Chatbot</h1>
            </div>
            <div style="text-align: center; padding: 15px;">
                <p style="font-size: 20px; margin: 20px 0; color: #666666;">Reset Your Password!!</p>
                <a href="${link}" style="background-color: #94beb8; color: white; text-decoration: none; border-radius: 5px; padding: 15px 30px; font-size: 16px; display: inline-block; margin-top: 20px;">
                    Reset
                </a>
                <p style="font-size: 12px; color: #999999; margin: 20px 0;">Link will expire after 24 hours.</p>
            </div>
        </div>
        `,
    };

    return transporter.sendMail(mailData).then(async () => {
        if (await findEmailLink(email, "reset")) {
            await deleteEmailLink(email, "reset");
        }
        const link = await createEmailLink(email, "reset");
        if (!link) {
            return 500;
        }
        return 200
    });
}