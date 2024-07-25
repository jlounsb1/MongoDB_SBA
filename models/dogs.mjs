import mongoose from "mongoose"

//need to add validation to schema

const dogSchema = new mongoose.Schema({
    name: {type:String},
    location_lost: {type:String},
    description: {type: String},
    content: {type:String},
    owner_name:{type:String},
    owner_phone:{type:String},
    owner_email:{type:String},
    
})
//I tried to use the Mongoose documentation to set up a query that I used in dogs.mjs route. I could not get it to work
// dogSchema.query.byName = function(name) {
//     return this.where({name: new RegExp(name, 'i')})
// }

export default mongoose.model('Dog', dogSchema)

