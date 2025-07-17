import express, { Response, Request } from "express";
import { connectDb } from "./utils/db";
import cors from "cors";
import dotenv from "dotenv";
import authRoute from "./routes/auth/auth.route";
import userRoute from "./routes/user/user.route";

const app = express();

app.use(express.json());
app.use(cors());

dotenv.config();

const PORT = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.status(201).json({ message: "Server is working" });
});

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDb();
});
export default app;
