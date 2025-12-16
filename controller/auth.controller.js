import { User } from "../models/user.model.js";
import { hashPassword, comparePassword } from "../utlis/hash.js";
import { generateToken } from "../services/jwt.services.js";

export const signup = async (req, res) => {
  const { email, password, role } = req.body;
  const user = await User.create({
    email,
    password: await hashPassword(password),
    role
  });
  res.json({ token: generateToken(user) });
};

export const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user || !(await comparePassword(req.body.password, user.password)))
    return res.status(401).json({ message: "Invalid credentials" });

  res.json({ token: generateToken(user) });
};
