import mongoose from "mongoose"
import dotenv from "dotenv"


dotenv.config();

export const connectDB = async()=>{
  
  try {
		const conn = await mongoose.connect(process.env.DB_URL);
		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		console.log("Error connection to MongoDB: ", error.message);
		process.exit(1); 
	}
  
}