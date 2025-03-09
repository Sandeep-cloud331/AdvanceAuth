import express from "express";
import { connectDB } from "./db/connectDB.js";
import authRoutes from "./routes/auth.route.js"
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json())
app.use(cookieParser());

app.use("/api/auth",authRoutes)

app.listen(3000,()=>{
  connectDB();
  console.log(`http://localhost:3000`); 
})