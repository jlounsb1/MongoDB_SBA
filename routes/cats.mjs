import express from "express";
import Cat from "../models/cats.mjs"
const router = express.Router();

router.get("/", async (req, res) => {

    let CatsList = await Cat.find({});
    res.render(
        'catlist',
        {
            Cat: CatsList
        }
    )
})

router.get("/add", async (req, res) => {
    res.render(
        'addmissingcat'
    )
})
//post route for add to enter a single entry.
router.post("/add", async (req, res) =>{
    
    let newLostCat = req.body;
    console.log(newLostCat)
    let result = await Cat.create(newLostCat);
    res.send(result).status(204);
})

export default router;