import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Admin.css";
import { useNavigate } from "react-router-dom";

function Admin() {

  const navigate = useNavigate();

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

  // FETCH PRODUCTS
  const fetchProducts = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/products"
      );

      console.log("API DATA:", res.data);

      if (Array.isArray(res.data)) {

        setProducts(res.data);

      } else if (Array.isArray(res.data.products)) {

        setProducts(res.data.products);

      } else {

        setProducts([]);

      }

    } catch (err) {

      console.log("FETCH ERROR:", err);

      setProducts([]);

    }

  };

  // LOAD PRODUCTS
  useEffect(() => {

    fetchProducts();

  }, []);

  // INPUT CHANGE
  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  // ADD PRODUCT
  const handleAdd = async () => {

    try {

      if (
        !form.title ||
        !form.price ||
        !form.category ||
        !form.image1
      ) {

        alert("Fill all fields ❌");

        return;

      }

      await axios.post(
        "http://localhost:5000/api/products",
        {
          title: form.title,
          price: Number(form.price.replace(/,/g, "")),
          category: form.category.trim().toLowerCase(),
          image1: form.image1,
          image2: form.image2,
          image3: form.image3,
          image4: form.image4,
        }
      );

      alert("Product Added ✅");

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

      console.log(
        "ADD ERROR:",
        err.response?.data || err.message
      );

      alert("Add Failed ❌");

    }

  };

  // DELETE PRODUCT
  const handleDelete = async (id) => {

    try {

      await axios.delete(
        `http://localhost:5000/api/products/${id}`
      );

      fetchProducts();

    } catch (err) {

      console.log("DELETE ERROR:", err);

    }

  };

  // EDIT CLICK
  const handleEdit = (item) => {

    setEditId(item._id);

    setEditPrice(item.price.toString());

  };

  // SAVE EDIT
  const handleSave = async (id) => {

    try {

      await axios.put(
        `http://localhost:5000/api/products/${id}`,
        {
          price: Number(editPrice.replace(/,/g, "")),
        }
      );

      alert("Updated ✅");

      setEditId(null);

      fetchProducts();

    } catch (err) {

      console.log("UPDATE ERROR:", err);

      alert("Update Failed ❌");

    }

  };

  return (

    <div className="admin-container">

      {/* SIDEBAR */}
      <div className="sidebar">

        <h1>Admin</h1>

        <p onClick={() => navigate("/")}>
          Home
        </p>

        <p className="active">
          Products
        </p>

      </div>

      {/* MAIN */}
      <div className="main">

        <h1>Product Management</h1>

        {/* FORM */}
        <div className="form">

          <input
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
          />

          <input
            name="price"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
          />

          <input
            name="category"
            placeholder="Category"
            value={form.category}
            onChange={handleChange}
          />

          <input
            name="image1"
            placeholder="Image 1 URL"
            value={form.image1}
            onChange={handleChange}
          />

          <input
            name="image2"
            placeholder="Image 2 URL"
            value={form.image2}
            onChange={handleChange}
          />

          <input
            name="image3"
            placeholder="Image 3 URL"
            value={form.image3}
            onChange={handleChange}
          />

          <input
            name="image4"
            placeholder="Image 4 URL"
            value={form.image4}
            onChange={handleChange}
          />

          <button onClick={handleAdd}>
            Add Product
          </button>

        </div>

        {/* PRODUCTS */}
        <div className="product-grid">

          {products.length > 0 ? (

            products.map((item) => (

              <div
                key={item._id}
                className="card"
              >

                <img
                  src={item.image1}
                  alt=""
                />

                <h3>{item.title}</h3>

                {editId === item._id ? (

                  <>

                    <input
                      value={editPrice}
                      onChange={(e) =>
                        setEditPrice(e.target.value)
                      }
                    />

                    <div className="card-actions">

                      <button
                        className="save-btn"
                        onClick={() =>
                          handleSave(item._id)
                        }
                      >
                        Save
                      </button>

                      <button
                        className="cancel-btn"
                        onClick={() =>
                          setEditId(null)
                        }
                      >
                        Cancel
                      </button>

                    </div>

                  </>

                ) : (

                  <>

                    <p className="price">
                      ₹{item.price?.toLocaleString()}
                    </p>

                    <div className="card-actions">

                      <button
                        className="edit-btn"
                        onClick={() =>
                          handleEdit(item)
                        }
                      >
                        Edit
                      </button>

                      <button
                        className="delete-btn"
                        onClick={() =>
                          handleDelete(item._id)
                        }
                      >
                        Delete
                      </button>

                    </div>

                  </>

                )}

              </div>

            ))

          ) : (

            <h2>No Products Found</h2>

          )}

        </div>

      </div>

    </div>

  );

}

export default Admin;