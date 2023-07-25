const { User } = require("../models/userModel");
const { Hotel } = require("../models/hotelModel");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const getUser = async (req, res) => {
  try {
    console.log("getUser");
    const user = await User.findById(req.body.id).populate({path: "hotel", model: Hotel});
    if (!user) {
      res.status(200).json({ error: "No user found", user: {} });
      return;
    } else {
      res.status(200).json({ user });
      return;
    }
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

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
  let { name, username, password, email, phoneNumber, role, hotel } = req.body;

  try {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    hotelIds = hotel.map((hotelId) => new ObjectId(hotelId));
    const newUser = await User.create({
      name,
      username,
      password: hashedPassword,
      phoneNumber,
      email,
      role,
      hotel: hotelIds,
      addedBy: req.user._id,
    });

    res
      .status(200)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.log("[user controller error:]", error);
    res.status(500).json({ error: error.message });
  }
};

const updateUser = (req, res) => {
  // Some logic to update the user
};

const deleteUser = async(req, res) => {
  try{
    const {id} = req.body;
    const deletedUser = await User.findByIdAndDelete(id);
    if(!deletedUser){
      res.status(200).json({message: "No user found"});
      return;
    }else{
      res.status(200).json({message: "User deleted successfully"});
      return;
    }

    //TODO: delete all the bookings of the user


  }catch(error){
    console.log("[user controller deletion error:]", error);
    res.status(201).json({ error: error.message });
  }
};

module.exports = {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
