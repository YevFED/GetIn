import express, { Router } from "express";
import { signup } from "../../controller/auth/signup.controller";
import { login } from "../../controller/auth/login.controller";

const router = Router();

router.post("/signup", signup);
router.post("/login", login);

export default router;
