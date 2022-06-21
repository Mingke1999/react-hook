import { useState } from "react"

function Hooks(){
  const [message, setMessage] = useState("using hooks no state")
  const [count,setCount] = useState(0)

  function clickHandle(){
    setMessage("new hook")
  }
  function addHandle(){
    setCount(count+1)
  }
  function minHandle(){
    setCount(count-1)
  }
    return (
      <div>
        <h1>{message}</h1>
        <button onClick={clickHandle}>change message</button>
        <h1>count {count}</h1>
        <button onClick={addHandle}>increase</button>
        <button onClick={minHandle}>decrease</button>
      </div>
    )
}

export default Hooks