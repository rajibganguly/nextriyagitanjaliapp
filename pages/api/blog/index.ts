import { NextApiRequest, NextApiResponse } from "next";
import { blogData } from "./data";

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(blogData)) {
      throw new Error("Cannot find projects data");
    }

    res.status(200).json(blogData);
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
