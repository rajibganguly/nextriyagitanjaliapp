import { NextApiRequest, NextApiResponse } from 'next';
import mongoose from "mongoose";
import bcrypt from 'bcrypt';


import connectToDatabase from '../../../lib/mongoose';

import Profiles from "../../../lib/model/profiles";

export default async function handler(req, res) {
  await connectToDatabase();

  // if (req.method === 'GET') {
  //   try {
  //     const getUsers = await Profiles.find();
  //     console.log(getUsers)
  //     res.status(200).json(getUsers);
  //   } catch (error) {
  //     res.status(500).json({ error: 'Failed to fetch posts' });
  //   }

  // } 

  if (req.method === 'POST') {
    const userIds = req.body.userId;
    console.log(userIds)

    try {
      const getProfile = await Profiles.find({userId: userIds})
      console.log('response', getProfile)
      res.status(200).json({success: true, message: "Successful profile fetched", data: getProfile});
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch posts' });
    }

  }
}

    