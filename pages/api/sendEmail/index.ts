import { NextApiRequest, NextApiResponse } from "next";
import { sampleUserData } from "../../../utils/sample-data";
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  const body = JSON.parse(req.body);
  if (req.method === 'POST') {
    const { name, email } = body;
    console.log(name, email)

    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'rajibganguly@gmail.com', // your Gmail email address
        pass: 'Capgemini@28', // your Gmail password or app-specific password
      },
    });

    // Email content
    const mailOptions = {
      from: `${email}`, // sender email address
      to: 'rajibganguly@gmail.com', // recipient email address
      subject: 'New User Data',
      text: `Name: ${name}\nEmail: ${email}`,
    };

    try {
      // Send email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
