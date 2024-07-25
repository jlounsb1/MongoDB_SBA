import fs from "fs";
import mongoose from "mongoose"
import dotenv from "dotenv"
import Cat from "../models/cats.mjs"

dotenv.config();

const catSeed = JSON.parse(fs.readFileSync(`./seeddata/catseeds.json`, "utf-8"))

let db = mongoose.connect(process.env.ATLAS_URI).then((con) =>{
    console.log(`connected to ${con.connection?.name}`)
  })

const catDataImport = async () => {
    try{
        await Cat.create(catSeed)
    }
    catch (e){
        console.error(e);
    } finally {
        process.exit(0);
    }
}

if (process.argv[2]=== "--import") {
    catDataImport();
}

// node ./seeddata/importcat.js --import
//type this in terminal to import stuff