import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

/* ================= MIDDLEWARE ================= */

app.use(cors());

app.use(express.json());

/* ================= ROUTES ================= */

app.use(
  "/api/products",
  productRoutes
);

app.use(
  "/api/orders",
  orderRoutes
);

app.use(
  "/api/auth",
  authRoutes
);

/* ================= TEST ROUTE ================= */

app.get("/", (req, res) => {

  res.send(
    "Backend Running ✅"
  );

});

/* ================= DATABASE ================= */

mongoose
  .connect(process.env.MONGO_URI)

  .then(() => {

    console.log(
      "✅ MongoDB Connected"
    );

    app.listen(

      process.env.PORT || 5000,

      () => {

        console.log(
          "🚀 Server running on port 5000"
        );

      }
    );

  })

  .catch((error) => {

    console.log(
      "❌ MongoDB Error:",
      error.message
    );

  });