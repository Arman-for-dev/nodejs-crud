import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import Users from "../models/users.model.js";



export const login = async (req, res) =>{
    try {
        const {email, password} = req.body;
        const user = await Users.findOne({email});
        if(!user){
            return res.status(401).json({message: "User not found"});
        }

        const auth = await bcrypt.compare(password, user.password)
        if(!auth){
            return res.json({message: "Incorrect password or email"})
        }
        
        const token = jwt.sign({_id}, process.env.JWTSECRET_KEY, {expiresIn: '7d'});

        return res.status(200).json({user, token});
        
    } catch (error) {
        return res.status(500).json({message: "Something went wrong!"});
    }
}


export const register = async (req, res) =>{
    try {
        const {username, email, password} = req.body;
        const existUser = await Users.findOne({email});
        if(existUser){
            return res.status(401).json({message: "Email already taken!"});
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const user = new Users({
            username,
            email,
            password: hashPassword
        });
        await user.save();
        return res.status(200).json({message: "New User Created!"});
    } catch (error) {
        return res.status(500).json({message: "Something went wrong!"});
    }
}