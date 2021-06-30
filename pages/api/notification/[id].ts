import nc from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next";
import rateLimit from "express-rate-limit";
import { SESV2, SNS, Credentials } from "aws-sdk";
import database from "../utilities/database";

const rateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 100,
});

const sesv2 = new SESV2({
  apiVersion: "2019-09-27",
  credentials: new Credentials({
    accessKeyId: process.env.CUSTOM_AWS_ACCESS_KEY,
    secretAccessKey: process.env.CUSTOM_AWS_SECRET_ACCESS,
  }),
  region: "ap-south-1",
});

const sns = new SNS({
  apiVersion: "2010-03-31",
  credentials: new Credentials({
    accessKeyId: process.env.CUSTOM_AWS_ACCESS_KEY,
    secretAccessKey: process.env.CUSTOM_AWS_SECRET_ACCESS,
  }),
  region: "ap-south-1",
});

const handler = nc<NextApiRequest, NextApiResponse>()
  .use(rateLimiter)
  .post(async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const data = await (await database())
        .collection("registrations")
        .findOne({ id: req.query.id });
      if (data !== null) {
        console.log(
          await sns
            .publish({
              Message: `A new school, ${data.schoolName} has registered. You can view the entry from the Admin Portal.`,
              Subject: "New School Registration - Douglas Mathletes 2021",
              TopicArn:
                "arn:aws:sns:ap-south-1:267843983296:DMHSS_Mathletes_New_Registration",
            })
            .promise()
        );
      }
      res.status(200).end();
    } catch (error) {
      console.error(error);
      res.status(200).end();
    }
  });

export default handler;
