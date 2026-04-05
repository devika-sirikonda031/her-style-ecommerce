import express from "express";
import {
  addProduct,
  getProducts,
  deleteProduct
} from "../controllers/productController.js";

const router = express.Router();

// ➕ ADD PRODUCT
router.post("/", addProduct);

// 📦 GET PRODUCTS
router.get("/", getProducts);

// ❌ DELETE PRODUCT
router.delete("/:id", deleteProduct);

export default router;