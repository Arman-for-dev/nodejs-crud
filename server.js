import express from "express";
import "dotenv/config";
import cors from "cors";
import morgan from "morgan";
import databaseConnect from "./config/connetDB.js";



const app = express();
//Connect Database
databaseConnect()
//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(morgan('tiny'));


// Routes
app.use("/api/auth", );
app.use("/api/user", );



const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});