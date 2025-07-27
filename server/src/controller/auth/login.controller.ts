import { User } from "../../models/user.model";
import express, { Request, Response } from "express";
import bcrypt from "bcrypt";
import { createToken } from "../../middleware/createToken";

export const login = async (req: Request, res: Response) => {
  const { email, password, username } = req.body;

  console.log(req.body);

  const userEmail = await User.findOne({ email });
  const userUsername = await User.findOne({ username });

  const user: any = userEmail || userUsername;

  if (!userEmail) {
    user === userUsername;
  } else {
    user === userEmail;
  }

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid credentials" });
  }
  const token = await createToken(user);

  res.status(201).json({ user, token });
};
