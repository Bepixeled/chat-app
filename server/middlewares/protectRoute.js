import jwt from "jsonwebtoken";
import User from "../models/user.js";

// Protect route middleware
const protectRoute = async (req, res, next) => {
  // Get token from cookies
  try {
    const token = req.headers.authorization;
    // If token doesn't exist, respond with Unauthorized
    if (!token || !token.startsWith("Bearer ")) {
      return res.status(401).json("Unauthorized - no token");
    }
    const actualToken = token.split(" ")[1];
    console.log("Actual Token:", actualToken);
    // If token exists, verify token
    const verified = jwt.verify(actualToken, process.env.JWT_SECRET);
    // If token is not verified, respond with Unauthorized
    if (!verified) {
      return res.status(401).json("Unauthorized - token not verified");
    }
    // If token is verified but has expired, respond with Unauthorized
    if (verified.exp < Date.now() / 1000) {
      return res.status(401).json("Unauthorized - token has expired");
    }
    // If token is verified, find user by id and attach user to request object
    const user = await User.findById(verified.userId).select("-password");
    // If user doesn't exist, respond with user not found
    if (!user) {
      return res.status(401).json("User not found");
    }
    // If user exists, attach user to request object and call next
    req.user = user;
    next();

  } catch (error) {
    console.error(error.message);
    res.status(500).json(error.message);
  }
};


export default protectRoute;