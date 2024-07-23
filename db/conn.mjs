import mongoose from "mongoose"
import dotenv from "dotenv";
dotenv.config();

let db = mongoose.connect(process.env.ATLAS_URI).then((con) =>{
  console.log(`connected to ${con.connection?.name}`)
})
console.log(db)
export default db;

