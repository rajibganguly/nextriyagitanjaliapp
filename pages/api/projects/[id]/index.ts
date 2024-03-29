import { NextApiRequest, NextApiResponse } from "next";
import { projectsData } from "../../../../utils/projects-data";
import { Projects } from "../../../../interfaces";

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
    const {
        query: { id },
        method,
      } = _req;
  
      const data: Projects[] = projectsData.filter((f) => f.projectid === id)

  try {
    if (!Array.isArray(projectsData)) {
      throw new Error("Cannot find projects data");
    }

    res.status(200).json(data);
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
