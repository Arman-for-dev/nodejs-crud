import express from "express";
import "dotenv/config";
import connectDB from "./config/db.js";
import router from './routes/crud.route.js';


const app = express();
connectDB()


//Middleware
app.use(express.json());
//Routes
app.use('/api/content', router);


const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});