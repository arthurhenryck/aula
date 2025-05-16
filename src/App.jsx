import { useState } from "react";
import './App.css'

function App() {
  const [count, setCount] = useState(1)
  const [texto, setTexto] = useState("")
  const handleClick = () => {
    setCount(count * 2)
  }
  const handleTexto = (e) => {
    console.log(e.target.value)
   // setTexto()
  }
  return (
    <>
      <div className="card">
        <input type='password' placeholder='diride aqui' onChange={handleTexto} />
        <button onClick={handleClick}>Clique Aqui</button>
        {count}
        {texto}
      </div>
    </>
  )

}

export default App