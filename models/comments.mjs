import mongoose from "mongoose"

const commentSchema = new mongoose.Schema({
    user:{type:String},
    content:{type:String}
})

export default mongoose.model('Comment', commentSchema)