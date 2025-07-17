import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { isUser } from "../models/user.model";

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }
  try {
    const jwtsecret = process.env.SECRET!;
    const decoded = jwt.verify(token, jwtsecret) as isUser;

    req.user = decoded.user;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
