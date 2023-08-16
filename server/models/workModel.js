// models/workModel.js

const mongoose = require("mongoose");
let Schema = mongoose.Schema;

const workSchema = new mongoose.Schema(
  {
    userName: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    workDetails: {
      type: String,
      required: true,
    },
    finishDateLine: {
      type: Date,
      required: true,
    },
    workConfirm: {
      type: String,
      enum: ["PENDING", "CONFIRMED", "REJECTED"],
      default: "PENDING",
    },
    serialNumber: { type: String, required: true },
    createdBy: { type: Schema.Types.ObjectId, ref: "User" },
    remarks: {
      type: String,
    },
  },
  { timestamps: true },
);

const Work = mongoose.model("Work", workSchema);

module.exports = {
  Work,
};
