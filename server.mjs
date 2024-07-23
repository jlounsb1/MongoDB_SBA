import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const PORT = 3000;
const app = express();

import dogs from "./routes/dogs.mjs";

app.use(express.json());
await mongoose.connect(process.env.ATLAS_URI)

app.use("/dogs", dogs)

app.get("/", (req, res) =>{
    res.send("Let's find some Dogs!")
})

app.use((err, _req, res, next) => {
    res.status(500).send("Ok now it seems we are lost, not the dogs...");
  });
  
  // Start the Express server
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });