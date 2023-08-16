const { Booking } = require("../models/bookingModel");
const { Hotel } = require("../models/hotelModel");

const getBooking = async (req, res) => {
  const { bookingId } = req.body;
  try {
    const booking = await Booking.findById(bookingId);
    if (!booking) {
      res.status(200).json({ error: "No booking found", booking: {} });
      return;
    } else {
      res.status(200).json({ booking });
      return;
    }
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const getAllBookings = async (req, res) => {
  try {
    let { page, limit, sortBy, sortOrder, location, addedByMe } = req.query;
    page = parseInt(page) ?? 1;
    limit = parseInt(limit) ?? 10;

    let skipIndex = (page - 1) * limit;

    console.log("[get all bookings controller: =>]");
    console.time("get bookings");

    // Fetch bookings with applied filters and sorting
    let filter = {};

    if (req.user.role === "SUBADMIN") {
      filter.addedBy = req.user._id;
    }

    // Fetch all bookings
    const bookings = await Booking.find(filter)
      .sort({ createdAt: -1 }) // Sort by createdAt field in descending order (-1)
      .skip(skipIndex)
      .limit(limit)
      .populate({ path: "hotel", model: Hotel });

    let bookingsCount = await Booking.countDocuments(filter);

    console.timeEnd("get bookings");

    if (!bookings || bookings.length === 0) {
      res
        .status(200)
        .json({
          error: "No bookings found",
          bookings: [],
          bookingsCount: bookingsCount ?? 0,
        });
      return;
    } else {
      res.status(200).json({ bookings, bookingsCount: bookingsCount ?? 0 });
      return;
    }
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

const getAllBookingsBySearch = async (req, res) => {
  const { query } = req.query;
  console.log("[get all bookings by search controller: =>]")
  console.log(req.query);
  try {

    let filter = {};

    if (req.user.role === "SUBADMIN") {
      filter.addedBy = req.user._id;
    }


    const regex = new RegExp(escapeRegex(query), "gi");

    const bookings = await Booking.find(filter)
    .or([
      { guestName: regex }, // Search for bookings with guentName matching the provided regex
      {
        hotel: {
          $in: await Hotel.find({
            $or: [
              { hotelName: regex }, // Search for hotels with hotelName matching the provided regex
              { location: regex },  // Search for hotels with location matching the provided regex
            ]
          }).distinct('_id')
        }
      }
    ])
    .populate({
      path: "hotel",
      model: Hotel,
    });
    
  

  if (bookings.length > 0) {
    console.log(bookings);
    res.status(200).json({ bookings, message: "Bookings fetched successfully" });
  } else {
    console.log("No result found for this search");
    res.status(200).json({ bookings, message: "No result found for this search" });
  }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
    throw new Error(error);
  }
};


const createBooking = async (req, res) => {
  const {
    hotel,
    guestName,
    checkInDate,
    checkOutDate,
    roomCategory,
    numberOfRooms,
    numberOfPersons,
    bookingAmount,
    advanceAmount,
    dueAmount,
    advanceDate,
    bookingSource,
    bookingBy,
    plan,
    contactNumber,
    accountType,
    remarks,
  } = req.body;
  try {
    const newBooking = await Booking.create({
      hotel,
      guestName,
      checkInDate,
      checkOutDate,
      roomCategory,
      numberOfRooms,
      numberOfPersons,
      bookingAmount,
      advanceAmount,
      dueAmount,
      advanceDate,
      bookingSource,
      bookingBy,
      plan,
      contactNumber,
      accountType,
      remarks,
      addedBy: req.user._id,
    });
    if (!newBooking) {
      res.status(201).json({ message: "Booking not created", booking: {} });
      return;
    }

    const populatedBooking = await Booking.findById(newBooking._id).populate({
      path: "hotel", model: Hotel
    })


    res
      .status(200)
      .json({ message: "Booking created successfully", booking: populatedBooking });
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({ error: error.message });
  }
};

const updateBooking = async (req, res) => {
  const {
    id,
    guestName,
    checkInDate,
    checkOutDate,
    roomCategory,
    numberOfRooms,
    numberOfPersons,
    bookingAmount,
    advanceAmount,
    dueAmount,
    advanceDate,
    bookingSource,
    bookingBy,
    plan,
    contactNumber,
    remarks,
    status
  } = req.body;
  try {
    console.log("[update bookings controller]");
    const updatedBooking = await Booking.findByIdAndUpdate(
      id,
      {
        guestName,
        checkInDate,
        checkOutDate,
        roomCategory,
        numberOfRooms,
        numberOfPersons,
        bookingAmount,
        advanceAmount,
        dueAmount,
        advanceDate,
        bookingSource,
        bookingBy,
        plan,
        contactNumber,
        remarks,
        status
      },
      { new: true } // This option returns the updated document after the update is applied
    );

    if (!updatedBooking) {
      return res.status(201).json({ error: "Booking not found" });
    }

    const populatedBooking = await Booking.findById(updatedBooking._id).populate({
      path: "hotel", model: Hotel
    })

    res
      .status(200)
      .json({ message: "Booking updated successfully", user: populatedBooking });
  } catch (error) {
    console.log("[booking controller update error:]", error);
    res.status(201).json({ error: error.message });
  }
};

const cancelBooking = async (req, res) => {
  const {bookingId,status} = req.body;
  try {
    const updatedBooking = await Booking.findByIdAndUpdate(
      bookingId,
      {
        status
      },
      { new: true } // This option returns the updated document after the update is applied
    );

    if (!updatedBooking) {
      return res.status(201).json({ error: "Booking not found" });
    }

    res
      .status(200)
      .json({ message: "Booking cancelled successfully", booking: updatedBooking });
  } catch (error) {
    console.log("[user controller update error:]", error);
    res.status(201).json({ error: error.message });
    
  }
};

module.exports = {
  getBooking,
  getAllBookings,
  getAllBookingsBySearch,
  createBooking,
  updateBooking,
  cancelBooking,
};
