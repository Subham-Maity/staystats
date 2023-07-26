const { Hotel } = require("../models/hotelModel");
const { User } = require("../models/userModel");

const getHotel = async (req, res) => {
  const { hotelId } = req.body;
  try {
    const hotel = await Hotel.findById(hotelId);
    if (!hotel) {
      res.status(200).json({ error: "No hotel found", hotel: {} });
      return;
    } else {
      res.status(200).json({ hotel });
      return;
    }
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const getAllHotels = async (req, res) => {
  try {
    console.time("get hotels");
    console.log("[getAllHotels] controller: =====>");

    // Extract filters from req.query
    const { sortBy, sortOrder, location, addedByMe } = req.query;

    // Build the filter object based on the received query parameters
    const filter = {};

    if (location) {
      filter.location = location;
    }
    if (addedByMe) {
      filter.addedBy = req.user._id;
    }

    // Build the sort object based on the received query parameters
    const sort = {};

    if (sortBy) {
      sort[sortBy] = sortOrder === "desc" ? -1 : 1;
    }

    // Fetch hotels with applied filters and sorting
    const hotels = await Hotel.find(filter).sort(sort).populate("addedBy");

    console.timeEnd("get hotels");

    if (!hotels || hotels.length === 0) {
      res.status(200).json({ error: "No hotels found", hotels: [] });
      return;
    } else {
      res.status(200).json({ hotels });
      return;
    }
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const createHotel = async (req, res) => {
  if (req.user.role !== "ADMIN") {
    res.status(201).json({ error: "You are not authorized to create a hotel" });
    return;
  }
  const {
    hotelName,
    location,
    ownerName,
    ownerContact,
    GSTNumber,
    panNumber,
    aadharNumber,
    tradeLicense,
    bank,
    otherDocuments,
    frontOfficeContact,
  } = req.body;
  try {
    const newHotel = await Hotel.create({
      hotelName,
      location,
      ownerName,
      ownerContact,
      GSTNumber,
      panNumber,
      aadharNumber,
      tradeLicense,
      bank,
      otherDocuments,
      frontOfficeContact,
      addedBy: req.user._id,
    });
    if (!newHotel) {
      res.status(201).json({ message: "Hotel not created", hotel: {} });
      return;
    }
    await User.findByIdAndUpdate(req.user._id, {
      $push: { hotel: newHotel._id },
    });
    res
      .status(200)
      .json({ message: "Hotel created successfully", hotel: newHotel });
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({ error: error.message });
  }
};

const updateHotel = (req, res) => {
  // Some logic to update the hotel
};

const deleteHotel = async (req, res) => {
  try {
    const { id } = req.body;
    let hotelAddedBy = await Hotel.findById(id);
    hotelAddedBy = hotelAddedBy.addedBy;
    console.log("hotel added by: ", hotelAddedBy);
    const deletedHotel = await Hotel.findByIdAndDelete(id);
    if (!deletedHotel) {
      res.status(200).json({ error: "No hotel found" });
      return;
    } else {
      let updatedUser = await User.findByIdAndUpdate(hotelAddedBy, {
        $pull: { hotel: id },
      }, {new: true});
      console.log("updated user: ", updatedUser);
      if (updatedUser) {
        res.status(200).json({ message: "Hotel deleted successfully" });
        return;
      }
    }
  } catch (error) {
    console.log("[hotel controller ]: ", error);
    res.status(201).json({ error: error.message });
  }
};

module.exports = {
  getHotel,
  getAllHotels,
  createHotel,
  updateHotel,
  deleteHotel,
};
