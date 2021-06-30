import { sign, verify } from "jsonwebtoken";

export const signJwt = (payload) => {
  return sign(payload, process.env.JWT_SECRET);
};

export const verifyJwt = (token: string) => {
  return verify(token, process.env.JWT_SECRET);
};
