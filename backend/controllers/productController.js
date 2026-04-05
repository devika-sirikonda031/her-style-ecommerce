import Product from "../models/Product.js";

// ➕ ADD PRODUCT
export const addProduct = async (req, res) => {
  try {
    const { title, price, image1, image2, category } = req.body;

    if (!title || !price || !image1 || !category) {
      return res.status(400).json({ message: "All fields required ❌" });
    }

    const product = new Product({
      title,
      price,
      image1,
      image2,
      category,
    });

    await product.save();

    res.status(201).json({
      message: "Product added successfully ✅",
      product,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error ❌" });
  }
};


// 📦 GET PRODUCTS
export const getProducts = async (req, res) => {
  try {
    console.log("Fetching products...");

    const products = await Product.find();

    console.log("Products:", products); // 👈 SEE THIS IN RENDER LOGS

    res.status(200).json({
      products: products
    });

  } catch (error) {
    console.log("❌ ERROR:", error.message); // 👈 VERY IMPORTANT
    res.status(500).json({ message: "Error fetching products ❌" });
  }
};


// ❌ DELETE PRODUCT
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found ❌" });
    }

    await Product.findByIdAndDelete(id);

    res.status(200).json({ message: "Product deleted ✅" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Delete failed ❌" });
  }
};