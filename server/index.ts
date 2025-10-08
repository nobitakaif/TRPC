import { publicProcedure, router } from "./trpc";
import { z } from "zod"
import { createHTTPServer } from "@trpc/server/adapters/standalone";
import cors from "cors"
import { userRoute } from "./routers/createTodo";
import { UserSignIn } from "./routers/user";
import { MongoClient } from "mongodb";

MongoClient.connect("mongodb://admin:password@localhost:27017").then(e =>{
    console.log("sucessfull connected")
}).catch(e =>{
    console.log("error while connecting",e)
})

const appRouter = router({
    sayHi : publicProcedure.query(async ()=>{
        return "Hii from TRPC server"
    }),

    createTodo :userRoute,

    user : UserSignIn
  
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