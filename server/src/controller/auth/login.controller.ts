import { User } from "../../models/user.model";
import express, { Request, Response } from "express";
import bcrypt from "bcrypt";
import { createToken } from "../../middleware/createToken";

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
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
