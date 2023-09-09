import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import User from './User'
import Friends from './Friends'

function App() {
  // const [count, setCount] = useState(0)

function handleButton(){
  alert('Button Clicked')
}

const handleButton2 =() =>{
  alert('clicked button2')
}

  return (
    <>
      <h3>React core concept--2 </h3>
      <Friends></Friends>
      <User></User>
      <Team></Team>
      <Counter></Counter>
      
      <button onClick={handleButton}>Click Me</button>
      <button onClick={handleButton2}>Click Me2</button>
      <button onClick={()=>{alert('Button clicked')}}>Click Me3</button>


     
    </>
  )
}

export default App
