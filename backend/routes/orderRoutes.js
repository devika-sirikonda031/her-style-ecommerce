import express from "express";
import { createOrder, getOrders } from "../controllers/orderController.js";

const router = express.Router();

router.post("/", createOrder);

// ✅ FIXED (removed :email)
router.get("/", getOrders);

export default router;