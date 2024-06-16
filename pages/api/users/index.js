import { NextApiRequest, NextApiResponse } from 'next';
import mongoose from "mongoose";


import connectToDatabase from '../../../lib/mongoose';

import Users from "../../../lib/model/users";

//import Post from '../../models/Post';

export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === 'GET') {
    try {
      const getUsers = await Users.find({});
      console.log(getUsers)
      res.status(200).json(getUsers);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch posts' });
    }

  } 
}


// else if (req.method === 'POST') {
//   // const { title, content } = req.body;
//   try {
//     const newPost = new Users(req.body);
//     await newPost.save();
//     res.status(201).json(newPost);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to create post' });
//   }
// } else {
//   res.status(405).json({ error: 'Method not allowed' });
// }

    