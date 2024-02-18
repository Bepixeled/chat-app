import express from "express";
import { login, logout, register } from "../controllers/authControllers.js";

const authRoutes = express.Router();

// Login Route
authRoutes.post("/login", login);

// Logout Route
authRoutes.post("/logout", logout);

// Register Route
authRoutes.post("/register", register);

export default authRoutes;
