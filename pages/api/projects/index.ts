import { NextApiRequest, NextApiResponse } from "next";
import { projectsData } from "../../../utils/projects-data";

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(projectsData)) {
      throw new Error("Cannot find projects data");
    }

    res.status(200).json(projectsData);
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
