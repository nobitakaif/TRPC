import { useState } from 'react'
import './App.css'
import { signIn, sayHi } from './TRPC client'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'


function App() {
  const [user,setUser] = useState<string | undefined>()
  const [call, setCall] = useState<string | undefined>()

  async function submitButton(){
   
  }
  
  return (
    <>
      <div className='flex justify-center items-center flex-col gap-2 w-full border border-black rounded-lg'>
        <Input  placeholder='email '/>
        <Input  placeholder='password'/>
        <Button onClick={submitButton}>Sign in</Button>
        <h1>{user} </h1>
        {user && call}
      </div>
    </>
  )
}

export default App
