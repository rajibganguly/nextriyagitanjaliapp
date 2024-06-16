import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

import connectToDatabase from "../../../lib/mongoose";

import Users from "../../../lib/model/users";

export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, password, role_type } = req.body;

  if (!email || !password || !role_type) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const user = await Users.findOne({ email, role_type });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const returnData = {
      email: user.email,
      name: user.name,
      role_type: user.role_type,
      payment: user.payment,
      phone_number: user.phone_number,
      blockflat: user.blockflat
    };

    res
      .status(200)
      .json({ success: true, message: "Login successful!", data: returnData });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}
