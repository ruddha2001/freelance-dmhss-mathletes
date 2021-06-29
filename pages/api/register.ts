import nc from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next";
import rateLimit from "express-rate-limit";
import database from "./utilities/database";
import { nanoid } from "nanoid";

const rateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 20,
});

const handler = nc<NextApiRequest, NextApiResponse>()
  .use(rateLimiter)
  .post(async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      let uniqueSet = new Set();
      const requestBody = { ...req.body };
      let nonEmptyObject = {};
      for (let i = 0; i < Object.keys(requestBody).length; i++) {
        let key = Object.keys(requestBody)[i];
        if (
          key !== "schoolName" &&
          key !== "schoolEmail" &&
          key !== "schoolPrincipal" &&
          key !== "studentRepresentativeName" &&
          key !== "studentRepresentativeEmail" &&
          key !== "studentRepresentativePhone" &&
          key !== "teacherRepresentativeName" &&
          key !== "teacherRepresentativeEmail" &&
          key !== "teacherRepresentativePhone" &&
          key !== "checked" &&
          requestBody[key] !== ""
        )
          uniqueSet.add(requestBody[key].toUpperCase());
        if (requestBody[key] !== "") nonEmptyObject[key] = requestBody[key];
      }
      const uniqueArray = Array.from(uniqueSet);

      let fileObject = {};
      for (let index in uniqueArray) {
        let value = uniqueArray[index] as string;
        fileObject[value] = { photo: "", document: "" };
      }
      nonEmptyObject["id"] = nanoid(8);

      await (await database())
        .collection("registrations")
        .insertOne({ ...nonEmptyObject, fileObject });
      res.json({
        success: true,
        message: "Registration was successful.",
        id: nonEmptyObject["id"],
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: false,
        message: "Could not store data in the database.",
      });
    }
  });

export default handler;
