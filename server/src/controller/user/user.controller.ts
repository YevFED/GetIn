import bcrypt from "bcrypt";
import express, { Request, Response } from "express";
import { isUser, User } from "../../models/user.model";

declare global {
  namespace Express {
    interface Request {
      user?: isUser["user"];
    }
  }
}

export const getUser = async (req: Request, res: Response) => {
  const user = req.user;

  const findUser = await User.findById(user?._id);

  if (!findUser) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(findUser);
};

export const deleteProfile = async (req: Request, res: Response) => {
  const { password } = req.body;
  const user = req.user;

  if (!user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const findUser = await User.findById(user._id);

  if (!findUser) {
    return res.status(404).json({ message: "User not found" });
  }
  const isMatch = await bcrypt.compare(password, findUser.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid credentials" });
  }
  await User.findByIdAndDelete(user._id);
  return res
    .status(200)
    .json({ message: `${user.username} deleted successfully` });
};
