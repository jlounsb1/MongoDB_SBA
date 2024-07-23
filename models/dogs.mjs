import mongoose from "mongoose"

const dogSchema = new mongoose.Schema({
    name: {
        type:String
    },
    location_lost: {
        type:String
    },
    description: {type: String},
    content: {type:String},
    personality: [String],
    owner_information: {
        owner_name:{type:String},
        owner_phone:{type:String},
        owner_email:{type:String}
    },
    found:{type:Boolean}
})


export default mongoose.model('Dog', dogSchema)