import jwt from "jsonwebtoken";

export const createToken = async (user: any) => {
  const jwtSecret = process.env.SECRET!;

  if (!jwtSecret) {
    console.log("JWT secret is not defined");
  }

  const token = jwt.sign({ user }, jwtSecret, {
    expiresIn: "1d",
  });

  return token;
};
