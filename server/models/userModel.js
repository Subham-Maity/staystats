const mongoose = require("mongoose");

let Schema = mongoose.Schema;

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: String,
    phoneNumber: {
      type: String,
    },
    email: {
      type: String,
    },
    role: {
      type: String,
      enum: ["ADMIN", "SUBADMIN", "USER"],
      default: "USER",
      required: true,
    },
    addedBy: {type: Schema.Types.ObjectId, ref: "user"},
    hotel: {type: String}
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

module.exports = {
  User,
};
