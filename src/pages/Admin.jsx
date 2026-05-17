import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Admin.css";

function Admin() {
  const [products, setProducts] = useState([]);

  const [form, setForm] = useState({
    title: "",
    price: "",
    category: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
  });

  const [editId, setEditId] = useState(null);
  const [editPrice, setEditPrice] = useState("");

  // ✅ FETCH PRODUCTS
  const fetchProducts = async () => {
    try {
      const res = await axios.get("https://her-style-backend-rs3l.onrender.com/api/products");
      setProducts(res.data);
    } catch (err) {
      console.log("FETCH ERROR:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // ✅ INPUT CHANGE
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ ADD PRODUCT (FINAL FIX)
  const handleAdd = async () => {
    try {
      if (!form.title || !form.price || !form.category || !form.image1) {
        alert("Fill all fields ❌");
        return;
      }

      await axios.post("http://localhost:5000/api/products", {
        title: form.title,
        price: Number(form.price.replace(/,/g, "")), // ✅ FIXED
        category: form.category.trim().toLowerCase(), // ✅ FIX CATEGORY
        image1: form.image1,
        image2: form.image2,
        image3: form.image3,
        image4: form.image4,
      });

      alert("Product added ✅");

      setForm({
        title: "",
        price: "",
        category: "",
        image1: "",
        image2: "",
        image3: "",
        image4: "",
      });

      fetchProducts();
    } catch (err) {
      console.log("ADD ERROR:", err.response?.data || err.message);
      alert("Add failed ❌");
    }
  };

  // ✅ DELETE
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      fetchProducts();
    } catch (err) {
      console.log("DELETE ERROR:", err);
    }
  };

  // ✅ EDIT CLICK
  const handleEdit = (item) => {
    setEditId(item._id);
    setEditPrice(item.price.toString());
  };

  // ✅ SAVE EDIT
  const handleSave = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/products/${id}`, {
        price: Number(editPrice.replace(/,/g, "")), // ✅ FIXED
      });

      alert("Updated ✅");

      setEditId(null);
      fetchProducts();
    } catch (err) {
      console.log("UPDATE ERROR:", err.response || err.message);
      alert("Update failed ❌");
    }
  };

  return (
    <div className="admin-container">
      {/* SIDEBAR */}
      <div className="sidebar">
        <h2>Admin</h2>
        <p>Dashboard</p>
        <p className="active">Products</p>
      </div>

      {/* MAIN */}
      <div className="main">
        <h1>Product Management</h1>

        {/* FORM */}
        <div className="form">
          <input name="title" placeholder="Title" value={form.title} onChange={handleChange} />
          <input name="price" placeholder="Price (e.g. 62000)" value={form.price} onChange={handleChange} />
          <input name="category" placeholder="Category (tops/dresses)" value={form.category} onChange={handleChange} />

          <input name="image1" placeholder="Image 1 URL" value={form.image1} onChange={handleChange} />
          <input name="image2" placeholder="Image 2 URL" value={form.image2} onChange={handleChange} />
          <input name="image3" placeholder="Image 3 URL" value={form.image3} onChange={handleChange} />
          <input name="image4" placeholder="Image 4 URL" value={form.image4} onChange={handleChange} />

          <button onClick={handleAdd}>Add Product</button>
        </div>

        {/* PRODUCT GRID */}
        <div className="product-grid">
          {products.map((item) => (
            <div key={item._id} className="card">
              <img src={item.image1} alt="" />

              <h3>{item.title}</h3>

              {editId === item._id ? (
                <>
                  <input
                    value={editPrice}
                    onChange={(e) => setEditPrice(e.target.value)}
                  />

                  <div className="card-actions">
                    <button className="save-btn" onClick={() => handleSave(item._id)}>
                      Save
                    </button>
                    <button className="cancel-btn" onClick={() => setEditId(null)}>
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <p className="price">₹{item.price.toLocaleString()}</p>

                  <div className="card-actions">
                    <button className="edit-btn" onClick={() => handleEdit(item)}>
                      Edit
                    </button>
                    <button className="delete-btn" onClick={() => handleDelete(item._id)}>
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Admin;