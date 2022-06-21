import React,{useState,useEffect} from 'react'


export default function MousePosition() {
  const [position,setPosition] = useState({x:0,y:0})
  useEffect(()=>{
    const updateMouse = e =>{
        setPosition({
            x:e.clientX,
            y:e.clientY
        })
    }

    document.addEventListener("mousemove",updateMouse)

    return ()=>{
        document.removeEventListener("mouseremove",updateMouse)
    }
  })
  return position
}
