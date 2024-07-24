import express from "express";
import Dog from "../models/dogs.mjs"
import Comment from "../models/comments.mjs"
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

router.get("/:id/comments", async (req, res) =>{
    console.log(req.params.id)
    res.render(
        'addcomment'
    )
})



export default router;