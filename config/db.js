import mongoose, {connect} from "mongoose";



const connectDB = async () =>{
    const port = process.env.MONGODB_URI;
    try {
        await connect(port);
        console.log(`Database connected!`);
    } catch (e) {
        process.exit(1);
    }
}
export default connectDB;