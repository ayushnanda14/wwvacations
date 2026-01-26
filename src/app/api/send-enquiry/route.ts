import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const { name, phone, city, travelDate, persons } = data;

    if (!name || !phone || !city || !travelDate || !persons) {
      return NextResponse.json(
        { message: 'Invalid payload' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, // IMPORTANT for port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.verify(); // 🔥 catches SMTP errors early

    await transporter.sendMail({
      from: `"WW Vacations" <${process.env.SMTP_USER}>`,
      to: process.env.ENQUIRY_RECEIVER_EMAIL,
      subject: 'New Tour Enquiry',
      html: `
        <h2>New Tour Enquiry</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Mobile:</b> ${phone}</p>
        <p><b>City:</b> ${city}</p>
        <p><b>Travel Date:</b> ${travelDate}</p>
        <p><b>No. of Persons:</b> ${persons}</p>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('ENQUIRY ERROR:', error);
    return NextResponse.json(
      { message: 'Server error' },
      { status: 500 }
    );
  }
}
