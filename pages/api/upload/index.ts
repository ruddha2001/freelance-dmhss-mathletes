import nc from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next";
import rateLimit from "express-rate-limit";
import multer from "multer";

import database from "../utilities/database";

interface MulterRequest extends NextApiRequest {
  files: any;
}

const rateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 50,
});

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const handler = nc<MulterRequest, NextApiResponse>()
  .use(rateLimiter)
  .use(upload.any())
  .post(async (req: MulterRequest, res: NextApiResponse) => {
    console.log(req.files);
    console.log(req.body);
    res.redirect(`/success/${req.body.id}`);
  });

export default handler;

export const config = {
  api: {
    bodyParser: false,
  },
};
