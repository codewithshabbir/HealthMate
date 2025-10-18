import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "./config/db.js"; // ✅ ye line important hai
import authRoutes from "./routes/authRoutes.js";

// Load env variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// ✅ DB Connection check
const db = mongoose.connection;
db.on("error", (error) => console.error("❌ DB Error:", error));
db.once("open", () => console.log("✅ DB Connection is Open"));

// Routes
app.use("/api/auth", authRoutes);

// Test Route
app.get("/", (req, res) => {
  res.json({
    message: "🩺 HealthMate API is running successfully!",
    version: "1.0.0",
  });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error("Error:", err.stack);
  res.status(process.env.PORT).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});