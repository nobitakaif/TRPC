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

        // do db stuff,  put data inside db  

        return {
            id : "1",
        }
    })
})

// under the hood it is still using http/express call but think as a TRPC
const server = createHTTPServer({
    router : appRouter
})
server.listen(3000)

export type AppRouter = typeof appRouter // this return the type of approuter