// rafce , rfc , rafc , rfce

import React, { useState } from 'react'

function Counter() {
    //use state hook
    // const [vale , function] = useState(data)
    const [x, setX]= useState(10)
    console.log(x)

    // let x = 10;

    function handleIncrement (){
        // console.log("sb bdhiya")
        // let add =x +3
      
        setX((prev)=>prev+1)
        setX(x+1)
        // setX(x+1)
        // setX(x+1)

      
        // setX(x+1)
        // setX(x+1)
        // setX(x+1)
     
    }

    const handleDecrement = ()=>{
      setX(x-1)
    }

    const handleMultiply = ()=>{
      setX(x*2)
    }
    
    const divideByTwo = ()=>{
      setX(x/2)
    }

    const multiPly = ()=>{
      setX(x*x)
    }
  return (
    <div>
      <button onClick={handleIncrement}>increment</button>

      <p >{x} </p>

      <button onClick={handleDecrement}>decrement</button>
      <button onClick={handleMultiply}>Multiply by 2</button>
      <button onClick={divideByTwo}>Divide by 2</button>
      <button onClick={multiPly}>Multiple by  5</button>
    </div>
  )
}

export default Counter



