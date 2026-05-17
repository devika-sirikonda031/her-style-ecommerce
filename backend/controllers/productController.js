import Product from "../models/Product.js";


// ✅ GET ALL PRODUCTS
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error fetching ❌" });
  }
};


// ✅ GET SINGLE PRODUCT (🔥 VERY IMPORTANT)
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found ❌" });
    }

    res.json(product);

  } catch (err) {
    console.log("GET BY ID ERROR:", err);
    res.status(500).json({ message: "Server error ❌" });
  }
};


// ✅ ADD PRODUCT
export const addProduct = async (req, res) => {
  try {
    const { title, price, category, image1, image2, image3, image4 } = req.body;

    console.log("REQ BODY:", req.body);

    if (!title || !price || !category || !image1) {
      return res.status(400).json({ message: "Missing fields ❌" });
    }

    const newProduct = new Product({
      title,
      price: Number(price),
      category: category.toLowerCase(), // 🔥 important fix
      image1,
      image2,
      image3,
      image4,
      images: [image1, image2, image3, image4].filter(Boolean),
    });

    await newProduct.save();

    res.status(201).json({
      message: "Added ✅",
      product: newProduct,
    });

  } catch (err) {
    console.log("ADD ERROR:", err);
    res.status(500).json({ message: "Add failed ❌" });
  }
};


// ✅ UPDATE PRODUCT
export const updateProduct = async (req, res) => {
  try {
    const { price } = req.body;

    console.log("UPDATE:", req.params.id, price);

    if (!price) {
      return res.status(400).json({ message: "Price required ❌" });
    }

    const updated = await Product.findByIdAndUpdate(
      req.params.id,
      { price: Number(price) },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Not found ❌" });
    }

    res.json({
      message: "Updated ✅",
      product: updated,
    });

  } catch (err) {
    console.log("UPDATE ERROR:", err);
    res.status(500).json({ message: "Update failed ❌" });
  }
};


// ✅ DELETE PRODUCT
export const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted ✅" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Delete failed ❌" });
  }
};