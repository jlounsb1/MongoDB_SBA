import express from "express";
import Dog from "../models/dogs.mjs"
import dogSeeds from "../seeddata/dogseeds.mjs";
const router = express.Router();
console.log(Dog)

//Home for dog route
router.get("/", async (req, res) => {
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

//data seed route, execute when user visits page
router.get("/seed", async (req, res) => {
    await Dog.deleteMany({});
    await Dog.insertMany({dogSeeds})
    console.log(Dog, dogSeeds)
    res.send('Document reset and seeded, thank you.')
})


export default router;