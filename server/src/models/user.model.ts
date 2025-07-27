import mongoose from "mongoose";

export interface isUser {
  user: {
    _id: string;
    username: string;
    email: string;
    password: string;
    profileImg: string;
  };
}

const UserSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  profileImg: {
    type: String,
  },
});

export const User = mongoose.model("User", UserSchema);
