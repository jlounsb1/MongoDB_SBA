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

router.get("/:id/editcat", async (req, res) =>{
    let thisCat = req.params.id
    let result = await Cat.findById(thisCat)
    let resultName = result.name
    console.log(result.name)
    console.log(req.params.id)
    res.render(
        'editcat',
        {
            resultName: resultName,
            thisCat:thisCat
        }
    )
})

router.delete("/:id/editcat", async (req, res) =>{
    let thisCat = req.params.id;
    console.log(req.params.id, thisCat)
    try{
        const foundCat = await Cat.findByIdAndDelete(thisCat);
        res.send(foundCat)
    }catch(e){
        console.error(e)
        res.status(500). send(e)
    }
    //This delete route works, but I cannot get the pug form to register it
})

router.put("/:id/updatecat", async (req, res) =>{
    let thisCat = req.params.id
    let newLostCat = req.body;
    console.log(newLostCat, thisCat)
    let result = await Cat.findByIdAndUpdate(thisCat, newLostCat);
    res.send(result).status(204);
    //I can get the info to send when I manually add it in thunderclient, but the pug interface isnt working, and therefor req.body has nothing in it.
})


export default router;