import React, { useEffect, useState } from 'react'

const PracticeHooks = () => {
    //useState -->  value store , component re render
    const [x, setX] = useState(true)

    
    console.log("i am outside");
    
    console.log(x)
    
    useEffect(()=>{
        console.log("i am inside useEffect")
    },[x])


    useEffect(()=>{
        console.log("i am second")
    },[])

   
  return (
    <div>
        <h1>this is hooks page</h1>
        <button onClick={()=>setX(!x)}>click me</button>
    </div>
  )
}

export default PracticeHooks
