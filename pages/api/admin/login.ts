import nc from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next";
import rateLimit from "express-rate-limit";
import { verify } from "argon2";
import database from "../utilities/database";
import { signJwt } from "../utilities/jwtService";

const rateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 200,
});

const handler = nc<NextApiRequest, NextApiResponse>()
  .use(rateLimiter)
  .post(async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const data = await (await database())
        .collection("users")
        .findOne({ email: req.body.email }, { projection: { _id: 0 } });
      if (data === null)
        return res
          .status(403)
          .json({ success: false, message: "User was not found." });
      if (await verify(data.password, req.body.password)) {
        return res.json({
          success: true,
          token: signJwt({ email: req.body.email }),
        });
      }
      res
        .status(403)
        .json({ success: false, message: "Invalid user credentials." });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: error.message });
    }
  });

export default handler;
