import { useState, useEffect } from "react";

function Admin() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState([]);

  // FETCH
  const fetchProducts = async () => {
    const res = await fetch("http://localhost:5000/api/products");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // ADD
  const handleAddProduct = async () => {
    const res = await fetch("http://localhost:5000/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, price, image1, image2, category }),
    });

    const data = await res.json();
    alert(data.message);
    fetchProducts();
  };

  // DELETE
  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:5000/api/products/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();
    alert(data.message);
    fetchProducts();
  };

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "Arial" }}>

      {/* SIDEBAR */}
      <div style={{
        width: "220px",
        background: "#0f172a",
        color: "white",
        padding: "20px"
      }}>
        <h2>HerStyle</h2>
        <p style={{ marginTop: "30px" }}>Products</p>
      </div>

      {/* MAIN */}
      <div style={{
        flex: 1,
        background: "#f1f5f9",
        padding: "30px"
      }}>

        <h1>Admin Dashboard 👋</h1>

        <div style={{
          display: "grid",
          gridTemplateColumns: "300px 1fr",
          gap: "20px",
          marginTop: "20px"
        }}>

          {/* FORM */}
          <div style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px"
          }}>
            <h3>Add Product</h3>

            <input style={inputStyle} placeholder="Name" onChange={e => setTitle(e.target.value)} />
            <input style={inputStyle} placeholder="Price" onChange={e => setPrice(e.target.value)} />
            <input style={inputStyle} placeholder="Image 1" onChange={e => setImage1(e.target.value)} />
            <input style={inputStyle} placeholder="Image 2" onChange={e => setImage2(e.target.value)} />
            <input style={inputStyle} placeholder="Category" onChange={e => setCategory(e.target.value)} />

            <button style={buttonStyle} onClick={handleAddProduct}>
              Add Product 🚀
            </button>
          </div>

          {/* PRODUCTS */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "20px"
          }}>
            {products.map((p) => (
              <div key={p._id} style={{
                background: "white",
                padding: "10px",
                borderRadius: "12px",
                textAlign: "center",
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
              }}>
                <img src={p.image1} style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "10px"
                }} />

                <h4>{p.title}</h4>
                <p style={{ color: "green" }}>₹ {p.price}</p>

                <button 
                  onClick={() => handleDelete(p._id)}
                  style={{
                    background: "red",
                    color: "white",
                    border: "none",
                    padding: "8px",
                    borderRadius: "6px",
                    cursor: "pointer"
                  }}
                >
                  Delete 🗑️
                </button>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

// STYLES
const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  borderRadius: "8px",
  border: "1px solid #ccc"
};

const buttonStyle = {
  width: "100%",
  padding: "10px",
  background: "#6366f1",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer"
};

export default Admin;