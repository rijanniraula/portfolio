import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

async function POST(req: Request) {
  try {
    const { username, email, message } = await req.json();

    const mailOptions = {
      from: email,
      to: process.env.EMAIL,
      subject: `Message from ${username}, ${email}`,
      text: message,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);

    return NextResponse.json(
      { message: "Failed to send email." },
      { status: 500 }
    );
  }
}

export { POST };
