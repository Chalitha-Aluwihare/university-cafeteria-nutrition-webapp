import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  // Use Gmail or Mailtrap based on environment variables
  ...(process.env.EMAIL_SERVICE
    ? {
        service: process.env.EMAIL_SERVICE,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      }
    : {
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      }),
});

export const sendVerificationEmail = async (toEmail, code) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER, // Use environment variable for sender email
      to: toEmail,
      subject: "UniEats Email Verification Code",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #333; text-align: center;">UniEats Email Verification</h2>
          <p style="font-size: 16px;">Hello,</p>
          <p style="font-size: 16px;">Thank you for signing up with UniEats. Please use the following 4-digit code to verify your email address:</p>
          <div style="background-color: #f0f0f0; padding: 15px; border-radius: 5px; text-align: center; margin: 20px 0;">
            <h1 style="color: #4CCF7E; font-size: 36px; margin: 0;">${code}</h1>
          </div>
          <p style="font-size: 16px;">This code is valid for a limited time. If you didn't request this, you can safely ignore this email.</p>
          <p style="font-size: 16px;">Thanks,<br/>The UniEats Team</p>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Verification email sent successfully to:", toEmail, "Message ID:", info.messageId);
  } catch (error) {
    console.error("Error sending verification email:", error.message, error.stack);
    throw new Error(`Failed to send verification email: ${error.message}`);
  }
};