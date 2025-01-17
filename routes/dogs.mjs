import express from "express";
import Dog from "../models/dogs.mjs"
const router = express.Router();



//Home for dog route
router.get("/", async (req, res) => {
    let dogsList = await Dog.find({});
    res.render(
        'doglist',
        {
            Dog: dogsList
        }
    )
})


// router.get('/byname/:id', async (req, res) =>{
//     try{
//        await Dog.find().byName(req.params.id).exec((err, animals)=>{res.send(animals)})
//     } catch (e) {res.status(500).send(e)}
// })
//I am getting the 500 error returned and my response displays as an empty object. I was trying to set up a search query as part of the schema.

//home page for adding a lost dog. Might combine this with the base page.
router.get("/add", async (req, res) => {
    res.render(
        'addmissingdog'
    )
})
//post route for add to enter a single entry.
router.post("/add", async (req, res) =>{
    
    let newLostDog = req.body;
    console.log(newLostDog)
    let result = await Dog.create(newLostDog);
    res.send(result).status(204);
})

router.get("/:id/editdog", async (req, res) =>{
    let thisDog = req.params.id
    let result = await Dog.findById(thisDog)
    let resultName = result.name
    console.log(result.name)
    console.log(req.params.id)
    res.render(
        'editdog',
        {
            resultName: resultName,
            thisDog:thisDog
        }
    )
})

router.delete("/:id/editdog", async (req, res) =>{
    let thisDog = req.params.id;
    console.log(req.params.id, thisDog)
    try{
        const foundDog = await Dog.findByIdAndDelete(thisDog);
        res.send(foundDog)
    }catch(e){
        console.error(e)
        res.status(500). send(e)
    }
    //This delete route works, but I cannot get the pug form to register it
})

router.put("/:id/updatedog", async (req, res) =>{
    let thisDog = req.params.id
    let newLostDog = req.body;
    console.log(newLostDog, thisDog)
    let result = await Dog.findByIdAndUpdate(thisDog, newLostDog);
    res.send(result).status(204);
    //I can get the info to send when I manually add it in thunderclient, but the pug interface isnt working, and therefor req.body has nothing in it.
})



export default router;