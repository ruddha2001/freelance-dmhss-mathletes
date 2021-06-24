import nc from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next";
import rateLimit from "express-rate-limit";

import database from "../utilities/database";

const rateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 50,
});

const handler = nc<NextApiRequest, NextApiResponse>()
  .use(rateLimiter)
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const data = await (await database())
        .collection("mathletes")
        .findOne({ slug: req.query.slug }, { projection: { _id: 0 } });
      if (data === null)
        throw {
          isCustomError: true,
          code: 404,
          message: "Could not find any data with the given slug.",
        };
      res.json(data);
    } catch (error) {
      console.error(error);
      if (error.isCustomError) {
        return res.status(error.code).json({
          status: error.message,
        });
      }
      res.status(500).json({
        status:
          "Oops! We could not connect to the database right now, please try again later.",
      });
    }
  });

export default handler;
