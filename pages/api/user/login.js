import connectDB from "@/mongoDB/connectdb";
import User from "@/models/users/user-model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method === "POST") {
    connectDB();
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ msg: "Email and password required !" });
    }
    const emailExists = await User.findOne({ email:email });
    if (!emailExists) {
      return res.status(400).json({ msg: "Please Register first !" });
    }
    const passwordMatched = await bcrypt.compare(
      password,
      emailExists.password
    );
    if (passwordMatched) {
      const token = jwt.sign({ token: emailExists._id }, process.env.JWT_TOKEN_KEY, {
        expiresIn: "30d",
      });
      return res.status(200).json({ msg: "Logged in successfully !", token,emailExists });
    }
    return res.status(400).json({ msg: "Invalid Credentitials !" });
  }
}