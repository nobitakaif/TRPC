import z from "zod"
import { publicProcedure, router } from "../trpc"

export const UserSignIn = router({
    signin : publicProcedure.input(z.object({
        email : z.email({message : "email format is invalid"}),
        password : z.string()
    })).mutation(async (opts)=>{
        const email = opts.input.email
        const password = opts.input.password

        // do database call here check use is already exist or not 
        // generate token
        const token = "1111122223333"
        return {
            token
        }
    }),
})