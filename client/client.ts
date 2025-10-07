import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../server"; // use type because it is not exporting const appRouter, it is exporting type 

const trpcConnection = createTRPCProxyClient<AppRouter>({
    links:[
        httpBatchLink({
            url : "http://localhost:3000"
        })
    ]
})

async function main(){
    let createTodo = await trpcConnection.createTodo.mutate({
        title : "please go to gym today",
        description : "Today is Sunday and every Sunday you have to go gym",
        done : true
    })

    let signIn = await trpcConnection.signIn.mutate({
        email : "nobitakaif@gmail.com",
        password : "nobitakaif"
    })
    
    console.log(signIn)
    console.log(createTodo)
}

main()

