import Order from "../models/Order.js";

// ✅ CREATE ORDER
export const createOrder = async (req, res) => {
  try {
    const { items, total, address } = req.body;

    const newOrder = new Order({
      items,
      total,
      address,
      date: new Date(), // ✅ ADD THIS
      status: "Delivered" // ✅ ADD THIS
    });

    await newOrder.save();

    res.status(201).json({
      message: "Order placed successfully ✅",
      orderId: newOrder._id
    });

  } catch (error) {
    console.log("ERROR:", error);
    res.status(500).json({ message: "Order failed ❌" });
  }
};

// ✅ GET ALL ORDERS
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "Error fetching orders ❌" });
  }
};