import z from "zod";
import { publicProcedure, router } from "../trpc";

export const userRoute = router({
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
})