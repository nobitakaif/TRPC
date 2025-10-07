import { publicProcedure, router } from "./trpc";
import { z } from "zod"

const appRouter = router({
    createTodo : publicProcedure.input(z.object({
        title : z.string(),
        description : z.string(),
        done : z.boolean()
    })).mutation({
        
    })
})