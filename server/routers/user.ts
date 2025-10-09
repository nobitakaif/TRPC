import z from "zod"
import { publicProcedure, router } from "../trpc"
import { UserModel } from "../db/schema"
import { MongoClient } from "mongodb"
import  jwt from "jsonwebtoken"
import { db } from "../db/connecting"


export const UserSignIn = router({
    signUp : publicProcedure.input(z.object({
        email : z.email({message : "email format is invalid"}),
        password : z.string()
    })).mutation(async (opts)=>{
        const email = opts.input.email
        const password = opts.input.password

        // do database call here check use is already exist or not 
        // generate token 
        try{
            console.log('control reach inside try')
            const response = await db.collection('user').insertOne({
                email : email,
                password : password 
            })
            const token = "1111122223333"
            console.log("successfully inserted")
            return {
                id : response.insertedId,
                msg : "you're signed up",
                token: token
            }
        }catch(e){
            console.log(e)
            throw new Error("something went wrong")

        }
        
    }),

    signIn : publicProcedure.input(z.object({
        email : z.email({message : "email format is invalid"}),
        password : z.string()
    })).output(z.object({
        token : z.string().optional(),
        msg : z.string().optional()
    })).mutation(async (opts)=>{
        const email = opts.input.email
        const password = opts.input.password

        const isUser = await db.collection('user').findOne({
            email : email,
            password : password,
            
        })
        console.log(isUser)
        if(isUser){
            const token = jwt.sign({
                id : isUser._id
            }, "11111")
            // opts.ctx.token = token
            return {
                token
            }
        }
        return {
            msg : "you're email is not exist" 
        }
    })
})

