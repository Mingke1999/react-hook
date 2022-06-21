import React,{useState, useEffect} from 'react'

const MyAPI = {
    count:0,
    subScribe(cb){
        this.intervalID = setInterval(()=>{
            this.count+=1
            cb(this.count)
        },1000)
    },
    unSubscribe(){
        clearInterval(this.intervalID)  
    },
    reset(){{
        this.count = 0;
    }}
}
/**
 * componentwillunmount clear timecounter
 */
function SideEfect(){

    const [count,setCount] =  useState(0)

    useEffect(()=>{
        MyAPI.subScribe(count=>{
            setCount(count)
            console.log(count)
            
            //componentWillUnmount
            return function(){
                MyAPI.unSubscribe();
            }
        })
    },[])

    return (
      <div>
        <h1>Side effect</h1>
        <p>count = {count}</p>
      </div>
    )
}

export default SideEfect
