import nodemailer from 'nodemailer';
import { prisma } from './prisma';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL_AUTH,
        pass: process.env.MAIL_PASS,
    },
});

async function isEmailExist(email : string) {
    const user = await prisma.user.findFirst({
        where: {
            email: email,
        },
    });
    if(user) {
        return true;
    }
    return false;
}

export async function sendEmail(email : string) {
    if(await isEmailExist(email)) {//already exist email
        console.log("Email already exist");
        return 409;
    }
    const bs64 = btoa(email);//email address encode by base64
    const link = `http://localhost:3000/signup/${bs64}`;
    const mailData = {
        from: process.env.AUTH_USER,
        to: email,
        subject: `Sign up for Character_Chatbot`,
        html: `
    <div>Sign Up Link!! = <a href="${link}">link</a></div>
    </br>
    <p>Send by Character_Chatbot</p>
    `,
    };
    console.log("Send!");

    return transporter.sendMail(mailData).then(() => {return 200});
}

export async function sendEmailForgot(email : string) {
    if(await !isEmailExist(email)) {//user not exist
        console.log("Email not exist");
        return 409;
    }
    const bs64 = btoa(email);//email address encode by base64
    const link = `http://localhost:3000/reset/${bs64}`;
    const mailData = {
        from: process.env.AUTH_USER,
        to: email,
        subject: `Reset Password in Character_Chatbot`,
        html: `
    <div>Reset Password!! = <a href="${link}">link</a></div>
    </br>
    <p>Send by Character_Chatbot</p>
    `,
    };
    console.log("Send!");

    return transporter.sendMail(mailData).then(() => {return 200});
}