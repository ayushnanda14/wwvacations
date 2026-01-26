import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, phone, city, travelDate, persons } = await req.json();

    if (!name || !phone || !city || !travelDate || !persons) {
      return NextResponse.json({ message: 'Invalid data' }, { status: 400 });
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
        <h3>New Enquiry</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>City:</b> ${city}</p>
        <p><b>Travel Date:</b> ${travelDate}</p>
        <p><b>Persons:</b> ${persons}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('SEND ENQUIRY ERROR:', error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
