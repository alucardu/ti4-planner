import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import * as dotenv from "dotenv";
dotenv.config({ path: '../../../../.env.local' });

const email = {
  from: '"moviese.at" <info@moviese.at>', // sender address
  to: 'peter@cleanpixel.nl', // list of receivers
  subject: 'Password reset request', // Subject line
  // eslint-disable-next-line max-len
  html: `Test`, // html body
};

export const main = async (email: Mail.Options) => {
  const hostname = 'smtpout.secureserver.net';
  const username = process.env.MAIL_ACCOUNT;
  const password = process.env.MAIL_PASSWORD;

  const transporter = nodemailer.createTransport({
    host: hostname,
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: username,
      pass: password,
    },
    logger: true
  });

  // send mail with defined transport object
  const info = await transporter.sendMail(email);

  console.log('Message sent: %s', info.messageId);
}

main(email);