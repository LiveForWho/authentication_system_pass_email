import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import connectDB from "./configs/db.js";
import authRoute from "./routes/authRoute.js";

const app = express();
const port = process.env.PORT || 4000;
connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true }));

app.get("/", (req, res) => res.send("API Working"));
app.use("/api/auth", authRoute);

app.listen(port, () => console.log(`Server running on PORT: ${port}`));
