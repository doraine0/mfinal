const express = require("express");
const router = express.Router();

const { OrderStaff } = require("../models");

//get request => list of payment
router.get("/", async (req, res) => {
  try {
    const OrderStaffList = await OrderStaff.findAll({
      attributes: ["orderstaff_id", "order_id", "staff_id", "assigned_date"],
    });
    res.status(200).json(OrderStaffList);
  } catch (error) {
    res
      .status(404)
      .json({ message: "An error occured while fetching order staff data!" });
  }
});

//get customer details using orderstaff_id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const OrderStaff = await OrderStaff.findAll({
      attributes: ["orderstaff_id", "order_id", "staff_id", "assigned_date"],
      where: { id: id },
    });
    console.log(Payment);
    res.status(200).json(Payment);
  } catch (error) {}
  res.status(500).json({
    message: "Database error while fetching order staff data",
  });
});

//add new order staff
router.post("/new", async (req, res) => {
  try {
    const newOrderStaff = req.body;
    console.log(newOrderStaff);
    await newOrderStaff.create(newOrderStaff);
    res.status(201).json({ message: "New order staff data created" });
  } catch (error) {
    res
      .status(404)
      .json({ message: "An error occured while adding new order staff" });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;

  const { orderstaff_id, order_id, staff_id, assigned_date } = req.body;

  try {
    const [updated] = await Payment.update(
      {
        orderstaff_id: orderstaff_id,
        order_id: order_id,
        staff_id: staff_id,
        assigned_date: assigned_date,
      },
      {
        where: {
          id: id,
        },
      },
    );

    if (updated === 0) {
      return res.status(404).json({
        message: "orderstaff not found",
      });
    }

    res.status(200).json({
      message: "orderstaff updated successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "An error occurred while updating orderstaff.",
      error: error.message,
    });
  }
});

module.exports = router;
