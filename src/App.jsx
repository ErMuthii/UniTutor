
import { NextUIProvider } from '@nextui-org/react'
import './App.css'

function App() {
  

  return (
    <>
    <NextUIProvider>
      <h1 className="text-3xl font-bold underline">
          Hello world!
      </h1>
    </NextUIProvider> 
   
    </>
  )
}

export default App