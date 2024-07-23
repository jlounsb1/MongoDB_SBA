import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import pug from "pug";
import fs from "fs";


const PORT = 3000;
const app = express();

import dogs from "./routes/dogs.mjs";

app.use(express.json());
await mongoose.connect(process.env.ATLAS_URI)

//needed for pug to work
app.set("views", "./views");
app.set('view engine', 'pug');

app.use("/dogs", dogs)

app.get("/", (req, res) =>{
    res.render(
        'index'
    )
})

app.post("/", (req, res) =>{
    res.send(`${req.body}`)
})


app.use((err, _req, res, next) => {
    res.status(500).send("Ok now it seems we are lost, not the dogs...");
  });
  
  // Start the Express server
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });