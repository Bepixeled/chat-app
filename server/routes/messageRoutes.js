import express from "express";
import {sendMessage, getMessages} from "../controllers/messages.js";
import protectRoute from "../middlewares/protectRoute.js";

const messageRoutes = express.Router();

messageRoutes.get("/:id", protectRoute, getMessages)
messageRoutes.post("/send/:id", protectRoute, sendMessage)

export default messageRoutes;
