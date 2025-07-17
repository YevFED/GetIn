import express, { Request, Response } from "express";
import { User } from "../../models/user.model";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { createToken } from "../../middleware/createToken";

export const signup = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  const isUser = await User.findOne({ email });
  if (isUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  await newUser.save();

  const token = await createToken(newUser);

  res.status(201).json({ newUser, token });
};
