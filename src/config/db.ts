import mongoose from "mongoose";
import { serverConfig } from ".";


export async function ConnectDB(){
  try {
    await mongoose.connect(serverConfig.MONGO_URI)
    console.log("Connected to mongoDB")
  } catch (error) {
console.log("Error connecting to MONGODb")
throw error;
  }
}
