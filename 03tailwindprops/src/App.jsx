import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card.jsx"

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "hitesh",
    button : "visit here "
  }
  let newArr = [1, 2, 3]

  return (
    <>
     <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Taiwind Test</h1>
     <div className="flex flex-row space-x-4">
     <Card username= 'Adarsh' />
     <Card username= {myObj.username} btnText= {myObj.button} />
     <Card username= "chai" btnText= "click for chai" />
     <Card username= "React" btnText= "props React" />
    
     </div>
    </>
  )
}

export default App
