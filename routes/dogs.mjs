import express from "express";
import Dog from "../models/dogs.mjs"
const router = express.Router();
console.log(Dog)


//Home for dog route
router.get("/", async (req, res) => {
    let mydog = await Dog.findById('669ff8e9d07d10fcf0bd8217')
    console.log(`Test to see if I can actually pull from my database: ${mydog}`)
    await res.send("This is where we will list lost dogs.")
})
//home page for adding a lost dog. Might combine this with the base page.
router.get("/add", async (req, res) => {
    await res.send(`This is where there will be a submit lost dog form. Post route already set up.`)
})
//post route for add to enter a single entry.
router.post("/add", async (req, res) =>{
    let dogCollection = await Dog;
    let newLostDog = req.body;

    let result = await dogCollection.create(newLostDog);
    res.send(result).status(204);
})




export default router;