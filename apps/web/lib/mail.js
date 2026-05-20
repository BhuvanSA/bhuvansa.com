"use server";
import nodemailer from 'nodemailer';
import emailTemplate from './templates/emailTemplate';

export async function sendMail(formData) {
    // name, recipient, message
    const name = formData.get("name");
    const recipient = formData.get("email");
    const message = formData.get("message");

    const { SMTP_EMAIL, SMTP_PASSWORD, SMTP_HOST, SMTP_PORT, NOTIFICATION_EMAIL } = process.env;
    const transport = nodemailer.createTransport({
        host: SMTP_HOST,
        port: SMTP_PORT,
        secure: true,
        auth: {
            user: SMTP_EMAIL,
            pass: SMTP_PASSWORD,
        }
    })

    await transport.verify();

    try {
        const sendToRecipient = transport.sendMail({
            from: SMTP_EMAIL,
            to: recipient,
            subject: `Thank you for contacting!`,
            html: emailTemplate(name)
        });
        const sendToMe = transport.sendMail({
            from: SMTP_EMAIL,
            to: NOTIFICATION_EMAIL,
            subject: "New Contact Request",
            text: `Name: ${name}\nEmail: ${recipient}\nMessage: ${message}`
        });
        await Promise.all([sendToRecipient, sendToMe]);
        return { message: "success" };
    }
    catch (error) {
        console.error("Email send error:", error);
        return { message: "error", error: "Failed to send email" };
    }
}