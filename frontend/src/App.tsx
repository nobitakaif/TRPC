import { useState } from 'react'
import './App.css'
import { signIn, sayHi } from './TRPC client'


function App() {
  const [user,setUser] = useState<string | undefined>()
  const [call, setCall] = useState<string | undefined>()

  async function submitButton(){
    let response = await signIn({email: "nobitkaif@gmail.com", password : "nobitakaif"})
    setUser(response.token)
    let hicall = await sayHi()
    setCall(hicall)
  }
  
  return (
    <>
      <button onClick={submitButton}>Sign in</button>
      <h1>{user} </h1>
      {user && call}
    </>
  )
}

export default App
