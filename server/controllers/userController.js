import User from "../models/user.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select(
        "username profilePicture"
        );

    res.status(200).json(filteredUsers);

  } catch (error) {
    res.status(500).json(error.message);
    console.error(error);
  }
};
