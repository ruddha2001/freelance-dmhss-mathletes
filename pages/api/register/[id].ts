import nc from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next";
import rateLimit from "express-rate-limit";
import database from "../utilities/database";

const rateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 20,
});

const handler = nc<NextApiRequest, NextApiResponse>()
  .use(rateLimiter)
  .post(async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const data = await (await database())
        .collection("registrations")
        .findOne(
          { id: req.query.id },
          { projection: { fileObject: 1, _id: 0 } }
        );
      if (data === null)
        throw {
          isCustomError: true,
          code: 404,
          message: "Could not find any data with the given id.",
        };
      let k = 0;
      for (let i = 0; i < Object.keys(data.fileObject).length; i++) {
        let key = Object.keys(data.fileObject)[i];
        data.fileObject[key].photo = req.body.data[k++];
        data.fileObject[key].proof = req.body.data[k++];
      }
      await (await database())
        .collection("registrations")
        .updateOne(
          { id: req.query.id },
          { $set: { fileObject: data.fileObject } }
        );
      res.json({ success: true, message: "Documents uploaded successfully." });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: false,
        message: "Could not store data in the database.",
      });
    }
  });

export default handler;
