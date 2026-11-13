const express = require("express");
const router = express.Router();

const { Payment } = require("../models");

//get request => list of payment
router.get("/", async (req, res) => {
  try {
    const PaymentList = await Payment.findAll({
      attributes: [
        "payment_id",
        "order_id",
        "amount_paid",
        "balance",
        "payment_status",
        "payment_date",
      ],
    });
    res.status(200).json(PaymentList);
  } catch (error) {
    res
      .status(404)
      .json({ message: "An error occured while fetching customer data!" });
  }
});

//get customer details using payment_id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const Payment = await Payment.findAll({
      attributes: [
        "payment_id",
        "order_id",
        "amount_paid",
        "balance",
        "payment_status",
        "payment_date",
      ],
      where: { id: id },
    });
    console.log(Payment);
    res.status(200).json(Payment);
  } catch (error) {}
  res.status(500).json({
    message: "Database error while fetching payment data",
  });
});

//add new payment
router.post("/new", async (req, res) => {
  try {
    const newPayment = req.body;
    console.log(newPayment);
    await newPayment.create(newPayment);
    res.status(201).json({ message: "New payment data created" });
  } catch (error) {
    res
      .status(404)
      .json({ message: "An error occured while addimg new payment" });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;

  const { amount_paid, balance, payment_status, payment_date } = req.body;

  try {
    const [updated] = await Payment.update(
      {
        amount_paid: amount_paid,
        balance: balance,
        payment_status: payment_status,
        payment_date: payment_date,
      },
      {
        where: {
          id: id,
        },
      },
    );

    if (updated === 0) {
      return res.status(404).json({
        message: "Payment not found",
      });
    }

    res.status(200).json({
      message: "Payment updated successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "An error occurred while updating payment.",
      error: error.message,
    });
  }
});

module.exports = router;
