import nc, { NextHandler } from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next";
import rateLimit from "express-rate-limit";
import { verifyJwt } from "../utilities/jwtService";
import database from "../utilities/database";

const rateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 200,
});

const handler = nc<NextApiRequest, NextApiResponse>()
  .use(rateLimiter)
  .use((req: NextApiRequest, res: NextApiResponse, next: NextHandler) => {
    try {
      if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];
        if (verifyJwt(token)) {
          return next();
        }
      }
      res.status(403).json({
        success: false,
        message: "Forbidden from accessing this resource.",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Forbidden from accessing this resource. ISR.",
      });
    }
  })
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const data = await (
        await database()
      )
        .collection("registrations")
        .find({}, { projection: { _id: 0 } })
        .toArray();
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: error.message });
    }
  });

export default handler;
