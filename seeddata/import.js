import fs from "fs";
import mongoose from "mongoose"
import dotenv from "dotenv"
import Dog from "../models/dogs.mjs"

dotenv.config();

const dogSeed = JSON.parse(fs.readFileSync(`./seeddata/dogseeds.json`, "utf-8"))

let db = mongoose.connect(process.env.ATLAS_URI).then((con) =>{
    console.log(`connected to ${con.connection?.name}`)
  })

const dogDataImport = async () => {
    try{
        await Dog.create(dogSeed)
    }
    catch (e){
        console.error(e);
    } finally {
        process.exit(0);
    }
}

if (process.argv[2]=== "--import") {
    dogDataImport();
}

// node ./seeddata/import.js --import
//type this in terminal to import stuff