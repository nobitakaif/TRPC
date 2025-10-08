import z from "zod"
import { publicProcedure, router } from "../trpc"
import { UserModel } from "../db/schema"


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
            const response = await UserModel.insertOne({
                email : "email",
                password : "password" 
            })
            const token = "1111122223333"
            return {
                id : response.id,
                msg : "you're signed up"
            }
        }catch(e){
            console.log(e)
            throw new Error("something went wrong")

        }
        
    }),

    signIn : publicProcedure.input(z.object({
        email : z.email({message : "email format is invalid"}),
        password : z.string()
    })).mutation(async (opts)=>{

    })
})