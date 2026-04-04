import express from "express";
import Order from "../models/Order.js";

const router = express.Router();


// ✅ PLACE ORDER
router.post("/", async (req, res) => {
  const order = new Order(req.body);
  await order.save();

  res.json({ message: "Order placed successfully" });
});


// ✅ GET USER ORDERS
router.get("/:userId", async (req, res) => {
  const orders = await Order.find({ userId: req.params.userId });
  res.json(orders);
});

export default router;