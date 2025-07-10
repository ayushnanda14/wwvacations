import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';

// Ensure this route runs in the Node.js runtime so that Nodemailer (which depends on Node core modules) works properly.
export const runtime = 'nodejs';

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Helper to build a transporter using Gmail OAuth2.
async function createTransporter() {
  const {
    GMAIL_USER,
    GMAIL_CLIENT_ID,
    GMAIL_CLIENT_SECRET,
    GMAIL_REFRESH_TOKEN,
  } = process.env;

  if (!GMAIL_USER || !GMAIL_CLIENT_ID || !GMAIL_CLIENT_SECRET || !GMAIL_REFRESH_TOKEN) {
    throw new Error('Missing Gmail OAuth environment variables');
  }

  const oauth2Client = new google.auth.OAuth2(
    GMAIL_CLIENT_ID,
    GMAIL_CLIENT_SECRET
  );

  oauth2Client.setCredentials({ refresh_token: GMAIL_REFRESH_TOKEN });

  const { token: accessToken } = (await oauth2Client.getAccessToken()) ?? {};

  if (!accessToken) {
    throw new Error('Failed to obtain access token for Gmail');
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: GMAIL_USER,
      clientId: GMAIL_CLIENT_ID,
      clientSecret: GMAIL_CLIENT_SECRET,
      refreshToken: GMAIL_REFRESH_TOKEN,
      accessToken,
    },
  });
}

export async function POST(request: Request) {
  try {
    // Parse the JSON body coming from the client
    const body = (await request.json()) as Partial<ContactPayload>;

    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const transporter = await createTransporter();

    // Compose email
    await transporter.sendMail({
      from: `WWW Vacations <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER, // Send to ourselves
      replyTo: email,
      subject: `Contact Form — ${subject}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending contact email:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
} 