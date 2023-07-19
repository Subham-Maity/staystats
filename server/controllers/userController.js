const { User } = require('../models/userModel');
const bcrypt = require('bcryptjs');


const getUsers = (req, res) => {
  // Some logic to get the user
  try {
    console.log('getUsers')
    // const users = await User.find();
    res.status(200).json({
      message: "Users fetched successfully",
    });
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const createUser = (req, res) => {
    const { name, username, password,phoneNumber,role,hotel } = req.body;

    try {

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        const newUser = User.create({
            name,
            username,
            password: hashedPassword,
            phoneNumber,
            role,

        });

        res.status(200).json({ message: "User created successfully", user: newUser });


        
    } catch (error) {
        res.status(500).json({ error: error.message });
        
    }
}

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
