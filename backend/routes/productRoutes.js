import express from "express";

import {
  addProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();

// ✅ GET ALL PRODUCTS
router.get("/", getProducts);

// ✅ GET SINGLE PRODUCT
router.get("/:id", getProductById);

// ✅ ADD PRODUCT
router.post("/", addProduct);

// ✅ UPDATE PRODUCT
router.put("/:id", updateProduct);

// ✅ DELETE PRODUCT
router.delete("/:id", deleteProduct);

export default router;