// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/layout'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
  
    <Layout />


      <div>
        <h1>Quiz Game</h1>
        <p>Welcome to the Quiz Game!</p>
        <p>Click the button below to start!</p>
        <button onClick={() => alert('Game Started!')}>Start Game</button>
        
      </div>

      <div> Quiz Score 

Question: description of the drink

Answer 1: xxx
Answer 2: yyy

Photo of the drink
- video link
- article about the drink



      </div>

  

    </>
  )
}

export default App