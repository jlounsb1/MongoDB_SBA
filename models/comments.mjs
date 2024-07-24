import mongoose from "mongoose"
import dogs from './dogs.mjs'

const commentSchema = new mongoose.Schema({
    user:{type:String},
    content:{type:String},
    // dog:[{
    //     dog:{
    //         type:mongoose.Schema.Types.ObjectId,
    //         ref: 'Dog'
    //     }
    // }]
    dog: { type: mongoose.Schema.Types.ObjectId, ref: 'Dog', required: true }
})

export default mongoose.model('Comment', commentSchema)