import axios from "axios";

const BASE_URL = "https://her-style-backend-rs3l.onrender.com/api";

// ✅ GET ALL PRODUCTS
export const getProducts = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/products`);
    console.log("PRODUCT DATA:", res.data);

    return Array.isArray(res.data) ? res.data : [];
  } catch (err) {
    console.log("Error fetching products ❌", err);
    return [];
  }
};

// ✅ GET SINGLE PRODUCT
export const getProductById = async (id) => {
  try {
    const res = await axios.get(`${BASE_URL}/products/${id}`);
    return res.data;
  } catch (err) {
    console.log("Error fetching product ❌", err);
    return null;
  }
};

// ✅ ADD PRODUCT
export const addProduct = async (productData) => {
  try {
    const res = await axios.post(`${BASE_URL}/products`, productData);
    return res.data;
  } catch (err) {
    console.log("Error adding product ❌", err);
  }
};

// ✅ DELETE PRODUCT
export const deleteProduct = async (id) => {
  try {
    const res = await axios.delete(`${BASE_URL}/products/${id}`);
    return res.data;
  } catch (err) {
    console.log("Error deleting product ❌", err);
  }
};