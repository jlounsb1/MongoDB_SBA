import mongoose from "mongoose"

const ownerSchema = new mongoose.Schema({
    owner_name:String,
    owner_phone:String,
    owner_email:String
})

const dogSchema = new mongoose.Schema({
    name: String,
    location_lost: String,
    description: String,
    content: String,
    personality: [String],
    owner_information: {ownerSchema},
    found:Boolean
})


export default mongoose.model('Dog', dogSchema)