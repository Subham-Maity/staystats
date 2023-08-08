const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  hotelName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  ownerName: {
    type: String,
    required: true,
  },
  ownerContact: {
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  GSTNumber: {
    type: String,
    required: true,
  },
  panNumber: {
    type: String,
    required: true,
  },
  aadharNumber: {
    type: String,
    required: true,
  },
  tradeLicense: {
    type: String,
    required: true,
  },
  bank: {
    type: String,
    required: true,
  },
  otherDocuments: {
    type: String,
  },
  documentId: {
    type: String
  },
  frontOfficeContact: {
    type: String,
    required: true,
  },
  addedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  
},{timestamps: true});

const Hotel = mongoose.model("hotel", hotelSchema);

module.exports = { Hotel };