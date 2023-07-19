const { User } = require("../models/userModel");
const bcrypt = require("bcryptjs");

const getUsers = async (req, res) => {
  // Some logic to get the user
  try {
    console.log("getUsers");
    const users = await User.find({ role: "SUBADMIN" });
    if (!users) {
      res.status(200).json({ error: "No users found", users: [] });
      return;
    } else {
      res.status(200).json({ users });
      return;
    }
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const createUser = async (req, res) => {
  const { name, username, password, email, phoneNumber, role, hotel } =
    req.body;

  try {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const newUser = await User.create({
      name,
      username,
      password: hashedPassword,
      phoneNumber,
      email,
      role,
      hotel,
      addedBy: req.user._id,
    });

    res
      .status(200)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUser = (req, res) => {
  // Some logic to update the user
};

const deleteUser = (req, res) => {
  // Some logic to delete the user
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
