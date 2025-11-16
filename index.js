import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();
connectDB();

const app = express();

const allowedOrigins =["http://localhost:5173", "https://aishwarya-nikam-portfolio.vercel.app"]

app.use(cors({
  origin:allowedOrigins,
  methods:["GET", "POST"],
  credentials:true, // Allow cookies to be sent
}));
app.use(express.json());

app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
