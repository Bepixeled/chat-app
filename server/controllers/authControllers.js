import User from "../models/user.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";


// Login User
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const validPassword = await bcrypt.compare(password, user?.password || "");

    if(!user || !validPassword) {
        return res.status(400).json("Invalid username or password");
    }

    generateToken(user._id, res);

    res.status(200).json({
        _id: user._id,
        name: user.name,
        username: user.username,
        profilePicture: user.profilePicture
    });

  } catch (error) {
    res.status(500).json(error.message);
    console.error(error);
  }
};


// Logout User
export const logout = async (req, res) => {
  try {
    res.cookie("token", "", { maxAge: 1, });
    res.status(200).json("Logged out");
  } catch (error) {
    res.status(500).json(error.message);
    console.error(error);
  }
};


// Register User
export const register = async (req, res) => {
  try {
    const { name, username, password, confirmPassword } = req.body;

    // VALIDATE INPUTS
    if (password !== confirmPassword) {
      return res.status(400).json("Passwords do not match");
    }
    // CHECK IF USER EXISTS
    const user = await User.findOne({ username });

    // RESPOND IF USER EXISTS
    if (user) {
      return res.status(400).json("Username already exists");
    }

    // HASH PASSWORD WITH BCRYPT AND CREATE AVATAR

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // AVATAR PLACEHOLDER
    const profilePicture = `https://ui-avatars.com/api/?background=fff&color=000&name=${username}`;

    // CREATE NEW USER
    const newUser = new User({
      name: name,
      username: username,
      password: hashedPassword,
      profilePicture: profilePicture,
    });

    // SAVE USER AND RESPOND WITH USER DATA AND TOKEN COOKIE
    await generateToken(newUser._id, res);
    await newUser.save();

    res.status(201).json({
      _id: newUser._id,
      name: newUser.name,
      username: newUser.username,
      profilePicture: newUser.profilePicture,
    });
  } catch (error) {
    res.status(500).json(error.message);
    console.error(error);
  }
};
