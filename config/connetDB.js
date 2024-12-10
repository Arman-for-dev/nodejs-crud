import mongoose from "mongoose";


const databaseConnect = () =>{
    const mongouri = process.env.MONGO_URI;
    try {
        mongoose.connect(mongouri);
        console.log('Server is connected!');
    } catch (error) {
        process.exit(1);
    }
}

export default databaseConnect;