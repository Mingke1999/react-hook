import React,{useRef} from 'react'

export default function RefHook() {
    const text = useRef(null);
    function clickHandle(){
        console.log(text.current.innerHTML = "hello");
    }
  return (
    <div>
      <h2>Ref hook</h2>
      <p ref={text}>Text</p>
      <button onClick={clickHandle}>GET</button>
    </div>
  )
}
