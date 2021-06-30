import nc from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next";
import rateLimit from "express-rate-limit";
import { hash } from "argon2";
import database from "../utilities/database";

const rateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 200,
});

const handler = nc<NextApiRequest, NextApiResponse>()
  .use(rateLimiter)
  .post(async (req: NextApiRequest, res: NextApiResponse) => {
    return res.end();
    try {
      await (await database()).collection("users").insertOne({
        email: req.body.email,
        password: await hash(req.body.password),
      });
      res.end();
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: error.message });
    }
  });

export default handler;
