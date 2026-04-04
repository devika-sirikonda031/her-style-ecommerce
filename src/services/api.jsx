
export const getProducts = async () => {
  try {
    const res = await fetch("http://localhost:5000/api/products");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};