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

export async function sendEmail(email : string) {
    if(checkEmail(email) != "ok") {//invalid email
        console.log(email);
        console.log("Invalid Email");
        return 400;
    }
    if(await findUserProvider(email, "credentials")) {//already exist email
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

    return transporter.sendMail(mailData).then(async () => {
        if (await findEmailLink(email, "signup")) {
            await deleteEmailLink(email, "signup");
        }
        const link = await createEmailLink(email, "signup");
        if(!link) {
            console.log("Email link not created");
            return 500;
        }
        return 200
    });
}

export async function sendEmailForgot(email : string) {
    if(!findUserProvider(email, "credentials")) {//user not exist
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

    return transporter.sendMail(mailData).then(async () => {
        if (await findEmailLink(email, "reset")) {
            await deleteEmailLink(email, "reset");
        }
        const link = await createEmailLink(email, "reset");
        if(!link) {
            console.log("Email link not created");
            return 500;
        }
        return 200
    });
}