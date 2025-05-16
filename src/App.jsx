import { useState } from "react";
import './App.css'

function App() {
  const [count, setCount] = useState("texto")
  const handleClick = () => {
    alert(count)
  }

  return (
    <>
      <div className="card">
        <button onClick={handleClick}>Clique Aqui</button>
      </div>
    </>
  )

}

export default App