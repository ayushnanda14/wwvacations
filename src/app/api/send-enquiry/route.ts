import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, phone, city, travelDate, persons } = body;

    if (!name || !phone || !city || !travelDate || !persons) {
      return NextResponse.json(
        { message: 'Missing fields' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"WW Vacations" <${process.env.SMTP_USER}>`,
      to: process.env.ENQUIRY_RECEIVER_EMAIL,
      subject: 'New Tour Enquiry',
      html: `
        <h2>New Tour Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Mobile:</strong> ${phone}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Travel Date:</strong> ${travelDate}</p>
        <p><strong>No. of Persons:</strong> ${persons}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email Error:', error);
    return NextResponse.json(
      { message: 'Email failed' },
      { status: 500 }
    );
  }
}
