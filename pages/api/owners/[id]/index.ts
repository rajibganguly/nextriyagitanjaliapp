import { NextApiRequest, NextApiResponse } from "next";
import { owners } from "../data";

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
    const {
    query: { id },
    method,
  } = _req;

  const data = owners.filter((f) => {
    let ownersId = f.id;
    let pageId = +id
    if(ownersId == pageId) {
      return f;
    }
  })

  try {
    if (!Array.isArray(data)) {
      throw new Error("Cannot find Owners data");
    }
    res.status(200).json(data);
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};


export default handler;
