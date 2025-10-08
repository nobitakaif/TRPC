import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../../../server/index"
const trpcConnection = createTRPCProxyClient<AppRouter>({
    links:[
        httpBatchLink({
            url : "http://localhost:3000"
        })
    ]
})

interface UserSignIn{
    email : string,
    password : string
}

export async function signIn({email , password }:UserSignIn){
    let response = await  trpcConnection.signIn.mutate({
        email : email,
        password : password
    })
    return response
}

export async function sayHi(){
    let response = await trpcConnection.sayHi.query()
    return response
}

export async function createTodo  (){
    let repsone = await trpcConnection.createTodo.createTodo.mutate({
        description : "",
        title : "",
        done : false
    })
    return repsone
}