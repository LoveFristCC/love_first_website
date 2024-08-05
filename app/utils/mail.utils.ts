import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const transport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.GOOGLE_EMAIL,
    pass: process.env.GOOGLE_EMAIL_PASSWORD,
  },
} as SMTPTransport.Options);

type SendEmailData = {
  sender: any;
  recipients: Mail.Address[];
  subject: string;
  message: string;
};

export const sendEmail = async (data: SendEmailData) => {
  const { sender, recipients, subject, message } = data;

  return await transport.sendMail({
    from: sender,
    to: recipients,
    html: message,
    text: message,
    subject,
  });
};
