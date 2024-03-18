import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL_AUTH,
        pass: process.env.MAIL_PASS,
    },
});

export async function sendEmail(email : string) {
    console.log(email);
    const bs64 = btoa(email);//email address encode by base64
    const link = `http://localhost:3000/signup/${bs64}`;
    const mailData = {
        from: process.env.AUTH_USER,
        to: email,
        subject: `Sign up for Character_Chatbot`,
        html: `
    <div>Sign Up Link!! = ${link}</div>
    </br>
    <p>Send by Character_Chatbot</p>
    `,
    };

    return transporter.sendMail(mailData);
}