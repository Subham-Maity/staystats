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
  // Some logic to create the user
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
