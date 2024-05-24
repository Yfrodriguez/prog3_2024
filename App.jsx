import Home from "./pages/Home"
import { useState } from "react" 
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
    </>

  )
}

export default App