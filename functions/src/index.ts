import * as functions from 'firebase-functions';
import nodemailer from 'nodemailer';

export const sendEnquiry = functions.https.onRequest(async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).send('Method Not Allowed');
    return;
  }

  const { name, phone, city, travelDate, persons } = req.body;

  if (!name || !phone || !city || !travelDate || !persons) {
    res.status(400).json({ message: 'Invalid data' });
    return;
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: functions.config().smtp.user,
      pass: functions.config().smtp.pass,
    },
  });

  await transporter.sendMail({
    from: `"WW Vacations" <${functions.config().smtp.user}>`,
    to: 'bmeher249@gmail.com',
    subject: 'New Gujarat Package Enquiry',
    html: `
      <h3>New Enquiry – Gujarat Package</h3>
      <p><b>Name:</b> ${name}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>City:</b> ${city}</p>
      <p><b>Travel Date:</b> ${travelDate}</p>
      <p><b>Persons:</b> ${persons}</p>
    `,
  });

  res.status(200).json({ success: true });
});
