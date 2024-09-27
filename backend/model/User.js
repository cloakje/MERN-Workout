import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import validator from "validator";

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.statics.signUp = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled!");
  }

  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error("Password is not valid");
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already already in use ");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await this.create({ email, password: hashedPassword });

  return user;
};

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled!");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("incorrect email");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("incorrect passsword");
  }
  return user;
};

const User = mongoose.model("User", userSchema);

export default User;
