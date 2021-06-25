import nc from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next";
import rateLimit from "express-rate-limit";
import database from "./utilities/database";

const rateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 20,
});

const handler = nc<NextApiRequest, NextApiResponse>()
  .use(rateLimiter)
  .post(async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      await (await database()).collection("registrations").insertOne(req.body);
      res.json({ success: true, message: "Registration was successful." });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: false,
        message: "Could not store data in the database.",
      });
    }
  });

export default handler;
