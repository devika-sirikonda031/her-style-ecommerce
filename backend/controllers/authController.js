import User from "../models/User.js";

/* ================= REGISTER ================= */

export const registerUser = async (req, res) => {

  try {

    const {
      name,
      email,
      password
    } = req.body;

    const existingUser =
      await User.findOne({ email });

    if (existingUser) {

      return res.status(400).json({
        message:
          "Email already registered ❌",
      });
    }

    const newUser = new User({

      name,
      email,
      password,

    });

    await newUser.save();

    res.status(201).json({

      message:
        "Signup successful ✅",

      user: newUser,

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      message:
        "Server Error ❌",

    });
  }
};

/* ================= LOGIN ================= */

export const loginUser = async (req, res) => {

  try {

    const {
      email,
      password
    } = req.body;

    const user =
      await User.findOne({ email });

    if (!user) {

      return res.status(400).json({

        message:
          "User not found ❌",

      });
    }

    if (user.password !== password) {

      return res.status(400).json({

        message:
          "Wrong password ❌",

      });
    }

    res.status(200).json({

      message:
        "Login successful ✅",

      user,

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      message:
        "Server Error ❌",

    });
  }
};