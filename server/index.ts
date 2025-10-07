import { publicProcedure, router } from "./trpc";
import { z } from "zod"
import { createHTTPServer } from "@trpc/server/adapters/standalone";

const appRouter = router({
    createTodo : publicProcedure.input(z.object({
        title : z.string(),
        description : z.string(),
        done : z.boolean()
    })).mutation( async (opts)=>{ // for update date user mutaion or for get the data use query 
        const title = opts.input.title // data the body similar as req obj
        const description = opts.input.description
        const done = opts.input.done
        let username = opts.ctx.username
        console.log(username) // now we can use context  
        // do db stuff,  put data inside db  

        return {
            id : "1",
        }
    }),

    signIn : publicProcedure.input(z.object({
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
    })
})

// under the hood it is still using http/express call but think as a TRPC
const server = createHTTPServer({
    router : appRouter,
    createContext(opts){ // defining context  
        let authHeader = opts.req.headers["authorization"] 

        // verify jwt token if token is valid then reutrn otherwise user is invalid 
        
        return {
            username : "nobitakaif"
        }
    }
})
server.listen(3000)

export type AppRouter = typeof appRouter // this return the type of approuter