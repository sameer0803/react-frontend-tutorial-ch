
import './App.css'
import Card from './Components/Card'

function App() {
 
  let myobj = {
    name: "Sameer",
    age: 25
  }

  return (
    <>
    <Card name="Sameer" someobj="ClickMe"/>
    <Card name ="Azhar" />
    
    </>
  )
}

export default App
