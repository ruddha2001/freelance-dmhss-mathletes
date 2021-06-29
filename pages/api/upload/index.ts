import nc from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next";
import rateLimit from "express-rate-limit";
import { S3, Credentials } from "aws-sdk";
import { nanoid } from "nanoid";

const s3 = new S3({
  apiVersion: "2006-03-01",
  region: "ap-south-1",
  credentials: new Credentials({
    accessKeyId: process.env.CUSTOM_AWS_ACCESS_KEY,
    secretAccessKey: process.env.CUSTOM_AWS_SECRET_ACCESS,
  }),
});

const rateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 200,
});

const handler = nc<NextApiRequest, NextApiResponse>()
  .use(rateLimiter)
  .post(async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const key = nanoid(5) + req.body.fileName;
      const url = s3.getSignedUrl("putObject", {
        Bucket: "dmhss-mathletes",
        Key: key,
        ACL: "public-read",
      });
      res.json({ success: true, key, url });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: error.message });
    }
  });

export default handler;
