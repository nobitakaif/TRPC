import { publicProcedure, router } from "./trpc";
import { z } from "zod"
import { createHTTPServer } from "@trpc/server/adapters/standalone";
import cors from "cors"
import { userRoute } from "./routers/createTodo";

const appRouter = router({
    sayHi : publicProcedure.query(async ()=>{
        return "Hii from TRPC server"
    }),

    createTodo :userRoute,

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
    }),
  
})

// under the hood it is still using http/express call but think as a TRPC
const server = createHTTPServer({//this is based on where you're deploying on the which server for express is diff for next diff..
    router : appRouter,
    middleware : cors(),
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