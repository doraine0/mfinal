const express = require("express");
const router = express.Router();

const { Staff } = require("../models");

//get request => list of payment
router.get("/", async (req, res) => {
  try {
    const StaffList = await Staff.findAll({
      attributes: ["id", "staff_name", "staff_number", "position"],
    });
    res.status(200).json(StaffList);
  } catch (error) {
    res
      .status(404)
      .json({ message: "An error occured while fetching staff data!" });
  }
});

//add new staff
router.post("/new", async (req, res) => {
  try {
    const newStaff = req.body;
    console.log(newStaff);
    await Staff.create(newStaff);
    res.status(201).json({ message: "New staff data created" });
  } catch (error) {
    res
      .status(404)
      .json({ message: "An error occured while adding new staff." });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;

  const { staff_name, staff_number, position } = req.body;

  try {
    const [updated] = await Staff.update(
      {
        staff_name: staff_name,
        staff_number: staff_number,
        position: position,
      },
      {
        where: {
          id: id,
        },
      },
    );

    if (updated === 0) {
      return res.status(404).json({
        message: "Staff not found",
      });
    }

    res.status(200).json({
      message: "Staff updated successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "An error occurred while updating staff.",
    });
  }
});
module.exports = router;
