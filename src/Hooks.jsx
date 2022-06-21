import { useState } from "react"

function Hooks(){
  const [message, setMessage] = useState("using hooks no state")
    return (
      <div>
        <h1>{message}</h1>
      </div>
    )
}

export default Hooks