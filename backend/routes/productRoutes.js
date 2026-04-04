import express from "express";
import {
  addProduct,
  getProducts,
  deleteProduct
} from "../controllers/productController.js";

const router = express.Router();

// ➕ ADD
router.post("/", addProduct);

// 📦 GET
router.get("/", getProducts);

// ❌ DELETE
router.delete("/:id", deleteProduct);

export default router;