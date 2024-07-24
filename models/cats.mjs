import mongoose from "mongoose"


const catSchema = new mongoose.Schema({
    name: {type:String},
    location_lost: {type:String},
    description: {type: String},
    content: {type:String},
    owner_name:{type:String},
    owner_phone:{type:String},
    owner_email:{type:String},

})



export default mongoose.model('Cat', catSchema)

