import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./db/db.js";
import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";



const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

connectDB();

app.use("/auth",authRoutes) 
app.use("/messages", messageRoutes)

app.use("/users", userRoutes);



app.get("/", (req, res) => {
  res.send("Hello World");
 });



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
