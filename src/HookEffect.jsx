import React, {useState, useEffect} from 'react'
//rfc
export default function HookEffect() {

    const [count,setCount] = useState(0)
    const [num,setNum] = useState(0)
    //componentDidMount
    useEffect(()=>{ 
        //console.log("automatically execute")
        document.title = `tilte=${count}`
    })
    /**
     * []means listening to the state alteration, nothing then don't listen
     */
    useEffect(()=>{     //wont't be covered->task independent
        console.log("automatically execute")
    },[num]) //listen to num
    //componentDidUpdate
    function addHandle(){
        setCount(count+1)
      }
    function numHandle(){
        setNum(num+1)
      }
  return (
    <div>
      <h1>Effect Hook</h1>
      <button onClick={addHandle}>increase</button>
      <p>num={num}</p>
      <button onClick={numHandle}>num++</button>
    </div>
  )
}
