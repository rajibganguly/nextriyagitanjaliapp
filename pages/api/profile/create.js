import { NextApiRequest, NextApiResponse } from 'next';
import mongoose from "mongoose";
import bcrypt from 'bcrypt';


import connectToDatabase from '../../../lib/mongoose';
import Profiles from "../../../lib/model/profiles";

export default async function handler(req, res) {
  await connectToDatabase();
  

  if (req.method === 'POST') {
    
    try {
      const registeredUser = new Profiles({
        email: req.body.email,
        name: req.body.name,
        role_type: req.body.role_type,
        payment: req.body.payment,
        phone_number: req.body.phone_number,
        blockflat: req.body.blockflat,
        registration_of_flat: req.body.registration_of_flat,
        photo: req.body.photo,
        bio: req.body.bio,
        date_of_birth: req.body.date_of_birth,
        gender: req.body.gender,
        interest: req.body.interest,
        location: req.body.location,
        socials: req.body.socials,
        activity: req.body.activity,
        profession: req.body.profession,
        miscellaneous: req.body.miscellaneous,
        parking: req.body.parking,
        membershipStatus: req.body.membershipStatus,
        worker: req.body.worker,
        userId: req.body.userId,
        timestamp: req.body.timestamp,
      });

      console.log(registeredUser)
      await registeredUser.save();
      res.status(201).json({success: true, message: 'New register added!', data: registeredUser});
    } catch (error) {
      res.status(500).json({ error: 'Failed to create post' });
    }
  }
}

    