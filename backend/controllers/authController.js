import User from "../models/User.js";

/* ================= REGISTER ================= */

export const registerUser = async (req, res) => {

  try {

    const {
      name,
      email,
      password
    } = req.body;

    console.log("REGISTER DATA:", req.body);

    // CHECK EXISTING USER

    const existingUser =
      await User.findOne({ email });

    console.log(
      "EXISTING USER:",
      existingUser
    );

    if (existingUser) {

      return res.status(400).json({

        message:
          "Email already registered ❌",

      });

    }

    // CREATE USER

    const newUser = new User({

      name,
      email,
      password,

    });

    // SAVE USER

    await newUser.save();

    console.log(
      "NEW USER SAVED:",
      newUser
    );

    res.status(201).json({

      message:
        "Signup successful ✅",

      user: newUser,

    });

  } catch (error) {

    console.log(
      "REGISTER ERROR:",
      error
    );

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

    console.log(
      "LOGIN EMAIL:",
      email
    );

    console.log(
      "LOGIN PASSWORD:",
      password
    );

    // FIND USER

    const user =
      await User.findOne({ email });

    console.log(
      "FOUND USER:",
      user
    );

    // USER NOT FOUND

    if (!user) {

      return res.status(400).json({

        message:
          "User not found ❌",

      });

    }

    // WRONG PASSWORD

    if (user.password !== password) {

      console.log(
        "PASSWORD NOT MATCHED"
      );

      return res.status(400).json({

        message:
          "Wrong password ❌",

      });

    }

    console.log(
      "LOGIN SUCCESS"
    );

    // SUCCESS

    res.status(200).json({

      message:
        "Login successful ✅",

      user,

    });

  } catch (error) {

    console.log(
      "LOGIN ERROR:",
      error
    );

    res.status(500).json({

      message:
        "Server Error ❌",

    });

  }

};