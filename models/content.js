import mongoose from "mongoose";


const contentSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    body:{
        type:String,
        required: true
    }
});


const Content = mongoose.model('Contents', contentSchema);

export default Content;