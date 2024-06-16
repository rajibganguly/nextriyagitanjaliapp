import { NextApiRequest, NextApiResponse } from 'next';
import mongoose from "mongoose";
import bcrypt from 'bcrypt';


import connectToDatabase from '../../../lib/mongoose';

import Users from "../../../lib/model/users";

export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === 'POST') {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    try {
      const registeredUser = new Users({
        email: req.body.email,
        password: hashedPassword,
        name: req.body.name,
        role_type: req.body.role_type,
        payment: req.body.payment,
        phone_number: req.body.phone_number,
        blockflat: req.body.blockflat,
        timestamp: req.body.timestamp
      });
      console.log(registeredUser)
      await registeredUser.save();
      res.status(201).json({success: true, message: 'New register added!', data: registeredUser});
    } catch (error) {
      res.status(500).json({ error: 'Failed to create post' });
    }
  }
}

    