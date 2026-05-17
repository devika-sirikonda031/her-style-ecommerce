import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    items: [
      {
        title: String,
        price: Number,
        qty: Number,
        image1: String,
      },
    ],

    total: {
      type: Number,
      required: true,
    },

    address: {
      name: String,
      phone: String,
      address: String,
      pincode: String,
    },

    status: {
      type: String,
      enum: ["Pending", "Shipped", "Delivered", "Cancelled"],
      default: "Delivered",
    },
  },
  {
    timestamps: true, // ✅ USE THIS ONLY FOR DATE
  }
);

export default mongoose.model("Order", orderSchema);