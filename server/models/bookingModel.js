const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  hotel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'hotel',
    required: true,
  },
  serialNumber: { type: String },
  guestName: {
    type: String,
    required: true,
  },
  checkInDate: {
    type: Date,
    required: true,
  },
  checkOutDate: {
    type: Date,
    required: true,
  },
  roomCategory: {
    type: String,
    required: true,
  },
  numberOfRooms: {
    type: Number,
    required: true,
  },
  numberOfPersons: {
    type: Number,
    required: true,
  },
  bookingAmount: {
    type: Number,
    required: true,
  },
  advanceAmount: {
    type: Number,
    required: true,
  },
  dueAmount: {
    type: Number,
    required: true,
  },
  advanceDate: {
    type: Date,
    required: true,
  },
  bookingSource: {
    type: String,
    required: true,
  },
  bookingBy: {
    type: String,
    required: true,
  },
  plan: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  remarks: {
    type: String,
  },
  addedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  status: {
    type: String,
    enum: ['CONFIRMED', 'CANCELLED'],
    default: 'CONFIRMED',
  },
  accountType: {
    type: String,
  }
},{timestamps: true});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = { Booking };
