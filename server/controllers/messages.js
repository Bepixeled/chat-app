import Conversation from "../models/conversation.js";
import Message from "../models/messages.js";

export const sendMessage = async (req, res) => {
  try {
    // Get the message from the request body
    const { message } = req.body;
    // Get the receiver's id from the request parameters
    const { id: receiverId } = req.params;
    // Get the sender's id from the request user object
    const senderId = req.user._id;

    // Find the conversation between the sender and receiver
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    // If the conversation does not exist, create a new one
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    // Create a new message
    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    // Save the message
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    // SoOCKET IO functionality

    // Save the conversation
    // await newMessage.save();
    // await conversation.save();

    // Save the message and conversation
    await Promise.all([newMessage.save(), conversation.save()]);

    res.status(201).json(newMessage);
  } catch (error) {
    console.error(error.message);
    res.status(500).json(error.message);
  }
};

export const getMessages = async (req, res) => {
  try {
    // Get the receiver's id from the request parameters
    const { id: userToChatId } = req.params;

    // Get the sender's id from the request user object
    const senderId = req.user._id;

    // Find the conversation between the sender and receiver
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages");

    // If the conversation does not exist, return an empty array
    if (!conversation) res.status(200).json([]);

    const messages = conversation.messages;   

    // If the conversation does exist, return the messages
    res.status(200).json(messages);

    
      } catch (error) {
    console.error(error.message);
    res.status(500).json(error.message);
  }
};
