import jwt from "jsonwebtoken";
import Users from "../models/users.model";

export const authVerification = (req, res) =>{
    const token = req.headers.authorization;
    // const token = req.cookies.token;

    if(!token){
        return res.json({message: "Unauthorized!"});
    }

    jwt.verify(token, process.env.JWTSECRET_KEY, async (err, data)=>{
        if(err){
            return res.json({staus: false});
        }else{
            const user = await Users.findById(data.id)
            if(user) return res.json({status: true, user: user.username})
            else return res.json({status: false});
        }
    })
}