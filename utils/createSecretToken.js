import jwt from "jsonwebtoken";


export const createSecrettoken = (id) =>{
    return jwt.sign({id}, process.env.JWTSECRET_KEY,{
        expiresIn: 3 * 24 * 60 *60,
    })
}