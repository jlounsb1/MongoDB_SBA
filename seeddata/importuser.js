import fs from "fs";
import mongoose from "mongoose"
import dotenv from "dotenv"
import User from "../models/users.mjs"

dotenv.config();

const userSeed = JSON.parse(fs.readFileSync(`./seeddata/users.json`, "utf-8"))

let db = mongoose.connect(process.env.ATLAS_URI).then((con) =>{
    console.log(`connected to ${con.connection?.name}`)
  })

const userDataImport = async () => {
    try{
        await User.create(userSeed)
    }
    catch (e){
        console.error(e);
    } finally {
        process.exit(0);
    }
}

if (process.argv[2]=== "--import") {
    userDataImport();
}

// node ./seeddata/importuser.js --import
//type this in terminal to import stuff