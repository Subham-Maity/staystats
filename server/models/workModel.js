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
      type: Boolean,
      default: false,
    },
    serialNumber: { type: String, required: true },
    createdBy: { type: Schema.Types.ObjectId, ref: "User" },
    remarks: {
      type: String,
    },
    createdAt: { type: Date },
    confirmedAt: { type: Date },
  },
  { timestamps: true },
);

const Work = mongoose.model("Work", workSchema);

module.exports = {
  Work,
};
