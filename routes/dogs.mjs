import express from "express";
import Dog from "../models/dogs.mjs"
const router = express.Router();
console.log(Dog)


router.get("/", async (req, res) => {
    await res.send("This is where we will list lost dogs.")
})

router.get("/add", async (req, res) => {
    await res.send(`This is where there will be a submit lost dog form. Post route already set up.`)
})
router.post("/add", async (req, res) =>{
    let dogCollection = await Dog;
    let newLostDog = req.body;

    let result = await dogCollection.create(newLostDog);
    res.send(result).status(204);
})

export default router;