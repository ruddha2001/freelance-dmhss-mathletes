import nc from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next";
import rateLimit from "express-rate-limit";

import database from "./utilities/database";

const rateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 50,
});

const handler = nc<NextApiRequest, NextApiResponse>()
  .use(rateLimiter)
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      res.json(
        await (await database())
          .collection("mathletes")
          .findOne({ name: "eventList" }, { projection: { _id: 0, list: 1 } })
      );
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status:
          "Oops! We could not connect to the database right now, please try again later.",
      });
    }
  });

export default handler;
