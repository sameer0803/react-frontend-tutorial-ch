import { useState } from 'react';
import './App.css'

function App() {

  const [counter,setCounter] = useState(15)

// let counter =15;
 const increase =()=>{
  console.log("I am counter "+counter, Math.random())
  // counter++;
  setCounter(counter+1);
 }
 const decrease =()=>{
  console.log("I am counter "+counter, Math.random())
  // counter++;
  setCounter(counter-1);
 }

  return (
    <>
   <div className="App">
      <h1>Counter {counter}</h1>
     <button onClick={increase}>Add {counter}</button> <br />
     <button onClick={decrease}>Remove {counter}</button>
    <p>footer:{counter}</p>
     </div>
    </>
  )
}

export default App
