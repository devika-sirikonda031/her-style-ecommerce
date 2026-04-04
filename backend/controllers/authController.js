import User from "../models/User.js";

// SIGNUP
export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // check fields
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields required ❌" });
    }

    // check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists ❌" });
    }

    const user = new User({
      name,
      email,
      password,
    });

    await user.save();

    res.status(201).json({ message: "Signup successful ✅" });

  } catch (error) {
    console.log(error);

    // duplicate error
    if (error.code === 11000) {
      return res.status(400).json({ message: "Email already registered ❌" });
    }

    res.status(500).json({ message: "Server error ❌" });
  }
};


// LOGIN
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found ❌" });
    }

    if (user.password !== password) {
      return res.status(400).json({ message: "Invalid password ❌" });
    }

    res.json({
      message: "Login successful ✅",
      user,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error ❌" });
  }
};