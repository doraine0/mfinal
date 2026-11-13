const express = require("express");
const router = express.Router();

const { Customer } = require("../models");

//get request => list of customer
router.get("/", async (req, res) => {
  try {
    const CustomerList = await Customer.findAll({
      attributes: ["id", "customer_name", "customer_number", "address"],
    });
    res.status(200).json(CustomerList);
  } catch (error) {
    res
      .status(404)
      .json({ message: "An error occured while fetching customer data!" });
  }
});

//get customer details using customer_id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const Customer = await Customer.findAll({
      attributes: [
        "customer_id",
        "customer_name",
        "customer_number",
        "address",
      ],
      where: { id: id },
    });
    console.log(Customer);
    res.status(200).json(Customer);
  } catch (error) {}
  res.status(500).json({
    message: "Database error while fetching plans data",
  });
});

//add new customer
router.post("/new", async (req, res) => {
  try {
    const newCustomer = req.body;
    await Customer.create(newCustomer);
    res.status(201).json({ message: "New customer data created" });
  } catch (error) {
    res
      .status(404)
      .json({ message: "An error occured while adding new customer." });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;

  const { customer_name, customer_number, address } = req.body;

  try {
    const [updated] = await Customer.update(
      {
        customer_name: customer_name,
        customer_number: customer_number,
        address: address,
      },
      {
        where: {
          id: id,
        },
      },
    );

    if (updated === 0) {
      return res.status(404).json({
        message: "Customer not found",
      });
    }

    res.status(200).json({
      message: "Customer updated successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "An error occurred while updating customer.",
    });
  }
});
module.exports = router;
