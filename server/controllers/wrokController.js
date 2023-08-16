const { Work } = require("../models/workModel");
const { User } = require("../models/userModel");

const createWork = async (req, res) => {
  if (req.user.role !== "ADMIN") {
    res.status(201).json({ error: "You are not authorized to create a work" });
    return;
  }
  const { userName, workDetails, finishDateLine, serialNumber, remarks } =
    req.body;
  try {
    const newWork = await Work.create({
      userName,
      workDetails,
      finishDateLine,
      serialNumber,
      createdBy: req.user._id,
      remarks,
    });

    if (!newWork) {
      res.status(400).json({ message: "Work not created", work: {} });
      return;
    }

    res.status(201).json({
      message: "Work created successfully",
      work: newWork,
    });
  } catch (error) {
    console.error("Create Work error:", error);
    res.status(500).json({
      message: "An error occurred while creating the work",
    });
  }
};

const updateWork = async (req, res) => {
  const { workId, workDetails, finishDateLine, remarks } = req.body;
  try {
    const updatedWork = await Work.findByIdAndUpdate(
      workId,
      {
        workDetails,
        finishDateLine,
        remarks,
      },
      { new: true },
    );

    if (!updatedWork) {
      res.status(404).json({ error: "Work not found" });
      return;
    }

    res.status(200).json({
      message: "Work updated successfully",
      work: updatedWork,
    });
  } catch (error) {
    console.error("Update Work error:", error);
    res.status(500).json({
      message: "An error occurred while updating the work",
    });
  }
};

const deleteWork = async (req, res) => {
  const { workId } = req.body;
  try {
    const deletedWork = await Work.findByIdAndDelete(workId);

    if (!deletedWork) {
      res.status(404).json({ error: "Work not found" });
      return;
    }

    res.status(200).json({ message: "Work deleted successfully" });
  } catch (error) {
    console.error("Delete Work error:", error);
    res.status(500).json({
      message: "An error occurred while deleting the work",
    });
  }
};

const getAllWorks = async (req, res) => {
  try {
    const works = await Work.find()
      .sort({ createdAt: -1 })
      .populate("userName createdBy");

    res.status(200).json({ works });
  } catch (error) {
    console.error("Get All Works error:", error);
    res.status(500).json({
      message: "An error occurred while fetching all works",
    });
  }
};

const getWorksBySearch = async (req, res) => {
  const { query } = req.query;
  try {
    const regex = new RegExp(escapeRegex(query), "gi");

    const works = await Work.find()
      .or([{ workDetails: regex }, { remarks: regex }, { serialNumber: regex }])
      .populate("userName createdBy");

    if (works.length > 0) {
      res.status(200).json({ works });
    } else {
      res.status(200).json({
        works: [],
        message: "No result found for this search",
      });
    }
  } catch (error) {
    console.error("Get Works by Search error:", error);
    res.status(500).json({
      message: "An error occurred while fetching works by search",
    });
  }
};

const confirmWork = async (req, res) => {
  const { workId } = req.body;
  try {
    const confirmedWork = await Work.findByIdAndUpdate(
      workId,
      {
        workConfirm: true,
        confirmedAt: new Date(),
      },
      { new: true },
    );

    if (!confirmedWork) {
      res.status(404).json({ error: "Work not found" });
      return;
    }

    res.status(200).json({
      message: "Work confirmed successfully",
      work: confirmedWork,
    });
  } catch (error) {
    console.error("Confirm Work error:", error);
    res.status(500).json({
      message: "An error occurred while confirming the work",
    });
  }
};

function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

module.exports = {
  createWork,
  updateWork,
  deleteWork,
  getAllWorks,
  getWorksBySearch,
  confirmWork,
};
