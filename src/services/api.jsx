export const getProducts = async () => {
  try {
    const res = await fetch("https://her-style-backend.onrender.com/api/products");
    const data = await res.json();
    return data.products; // ✅ IMPORTANT
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};