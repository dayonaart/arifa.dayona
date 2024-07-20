import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const password = process.env.NEXT_PUBLIC_MAIL_PASS;
const username = process.env.NEXT_PUBLIC_MAIL;

// export type RequestBody = {
//   from: string;
//   company: string;
//   message: string;
// };
export async function POST(request: Request) {
  const reqBody = await request.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: username,
      pass: password,
    },
  });

  try {
    const sendResult = await transporter.sendMail({
      from: reqBody.from,
      to: username,
      subject: reqBody.company,
      html: ` <ul>
      <h1>${reqBody.from} </h1>
      <h2>${reqBody.company} </h2>
      <p>${reqBody.message}</p>
    </ul>`,
    });
    return NextResponse.json(
      { message: "Pesan Anda Telah Terkirim, Terimakasih!" },
      { status: 200 }
    );
  } catch (error) {
    NextResponse.json(
      { message: "Terjadi Kesalahan Mohon Ulangi" },
      { status: 666 }
    );
  }
}
