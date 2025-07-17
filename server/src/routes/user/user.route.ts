import express, { Router } from "express";
import { signup } from "../../controller/auth/signup.controller";
import { deleteProfile, getUser } from "../../controller/user/user.controller";
import { authenticate } from "../../middleware/tokenCheck";

const router = Router();

router.get("/getuser", authenticate, getUser);
router.delete("/deleteuser", authenticate, deleteProfile);

export default router;
