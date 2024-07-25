import express from "express";
import Dog from "../models/dogs.mjs"

const router = express.Router();
console.log(Dog)


//Home for dog route
router.get("/", async (req, res) => {
    // let mydog = await Dog.findById('669ff8e9d07d10fcf0bd8217')
    // console.log(`Test to see if I can actually pull from my database: ${mydog}`)
    // await res.send(`${await Dog.find({})} This is where we will list lost dogs. ${mydog}`)
    let dogsList = await Dog.find({});
    res.render(
        'doglist',
        {
            Dog: dogsList
        }
    )
})

// router.get('/:id')


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



export default router;