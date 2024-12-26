import jwt from "jsonwebtoken";

export const createAccessToken=(payload)=>{
return new Promise((resolve,reject)=>{ 

    jwt.sign(payload,'xyz123',{expiresIn:"15m"},
        (err,token)=>{
            if(err) reject(err)
            resolve(token)
        })
} )}
