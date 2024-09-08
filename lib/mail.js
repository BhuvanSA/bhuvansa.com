import nodemailer from 'nodemailer';
import emailTemplate from './templates/emailTemplate';

export async function sendMail(name, recipient, message) {
    const { SMTP_EMAIL, SMTP_PASSWORD, SMTP_HOST, SMTP_PORT } = process.env;
    const transport = nodemailer.createTransport({
        host: SMTP_HOST,
        port: SMTP_PORT,
        secure: true,
        auth: {
            user: SMTP_EMAIL,
            pass: SMTP_PASSWORD,
        }
    })

    try {
        const testResult = await transport.verify();
        console.log(testResult)
    }
    catch (error) {
        console.log(error)
        return
    }

    try {
        const sendToRecepient = await transport.sendMail({
            from: SMTP_EMAIL,
            to: recipient,
            subject: "Thank you for contacting " + name + "!",
            html: emailTemplate(name)

        })
        const sendToMe = await transport.sendMail({
            from: SMTP_EMAIL,
            to: "bhuvansa@icloud.com",
            subject: "new contact request",
            text: "name: " + name + " email: " + recipient + " message: " + message
        })
        console.log(sendToRecepient.response)
        console.log(sendToMe.response)
    }
    catch (error) {
        console.log(error)
    }
}

export function compileWelcomeTemplate(name, url) {
    const template = handlebars.compile(welcomeTemplate);
    const htmlBody = template({
        name,
        url,
    });
    return htmlBody;
}