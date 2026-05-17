import { useEffect, useState } from "react";
import "../styles/Order.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(saved);
  }, []);

  return (
    <div className="orders-wrapper">

      <div className="orders-container">
        <h2>My Orders</h2>

        {orders.map((order) => (
          <div key={order.id} className="order-card">

            {/* HEADER */}
            <div className="order-header">
              <div>
                <p className="order-id">Order ID: {order.id}</p>
                <p className="order-date">{order.date}</p>
              </div>

              <span className="status">Delivered</span>
            </div>

            {/* ITEM */}
            {order.items.map((item, i) => (
              <div key={i} className="order-item">

                <img src={item.image} alt="" />

                <div className="item-details">
                  <h4>{item.title}</h4>
                  <p>₹{item.price}</p>
                  <p>Qty: {item.qty}</p>
                  <p>Size: {item.size}</p>
                </div>

              </div>
            ))}

            {/* DELIVERY */}
            <div className="delivery">
              🚚 Delivered on 05 May
            </div>

            {/* FOOTER */}
            <div className="order-footer">
              <div>
                <p>{order.address?.name}</p>
                <p>{order.address?.city}, {order.address?.state}</p>
              </div>

              <h3>₹{order.total}</h3>
            </div>

            {/* ACTION */}
            <div className="order-actions">
              <button>Track</button>
              <button>Reorder</button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default Orders;