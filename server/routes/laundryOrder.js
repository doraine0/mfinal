const express = require("express");
const router = express.Router();

const { LaundryOrder } = require("../models");

router.get("/", async (req, res) => {
  try {
    const LaundryOrderList = await LaundryOrder.findAll({
      attributes: [
        "order_id",
        "customer_id",
        "laundry_type",
        "service_type",
        "weight_kg",
        "date_received",
        "expected_pickup",
        "status",
        "total_price",
      ],
    });
    res.status(200).json(LaundryOrder);
  } catch (error) {
    res
      .status(404)
      .json({ message: "An error occured while fetching laundry order data!" });
  }
});

//get customer details using LaundryOder_id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const LaundryOrder = await LaundryOrder.findAll({
      attributes: [
        "order_id",
        "customer_id",
        "laundry_type",
        "service_type",
        "weight_kg",
        "date_received",
        "expected_pickup",
        "status",
        "total_price",
      ],
      where: { id: id },
    });
    console.log(LaundryOrder);
    res.status(200).json(LaundryOrder);
  } catch (error) {}
  res.status(500).json({
    message: "Database error while fetching laundry order data",
  });
});

//add new customer
router.post("/new", async (req, res) => {
  try {
    const newLaundryOrder = req.body;
    await LaundryOrder.create(newLaundryOrder);
    res.status(201).json({ message: "New LaundryOrder data created" });
  } catch (error) {
    res
      .status(404)
      .json({ message: "An error occured while adding new customer." });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;

  const {
    laundry_type,
    service_type,
    weight_kg,
    date_received,
    expected_pickup,
    status,
    total_price,
  } = req.body;

  try {
    const [updated] = await LaundryOrder.update(
      {
        laundry_type: laundry_type,
        service_type: service_type,
        weight_kg: weight_kg,
        date_received: date_received,
        expected_pickup: expected_pickup,
        status: status,
        total_price: total_price,
      },
      {
        where: {
          id: id,
        },
      },
    );

    if (updated === 0) {
      return res.status(404).json({
        message: "Laundry Order not found",
      });
    }

    res.status(200).json({
      message: "Laundry Order updated successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "An error occurred while updating the laundry order.",
      error: error.message,
    });
  }
});

module.exports = router;
