import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

await mongoose.connect(process.env.MONGO_URI,{dbNAme: "lionsDev"})
console.log("Conectado ao MongoDB")