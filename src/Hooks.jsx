import { useState } from "react"

function Hooks(){
  const [message, setMessage] = useState("using hooks no state")

  function clickHandle(){
    setMessage("new hook")
  }
    return (
      <div>
        <h1>{message}</h1>
        <button onClick={clickHandle}>change message</button>
      </div>
    )
}

export default Hooks