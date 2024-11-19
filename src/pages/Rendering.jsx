import React, { useState } from 'react'
import Navbar from '../components/Navbar';

const Rendering = () => {

    // let x = 10;
    // if(x>2){
    //     console.log("sub badhiya")
    // }
    // else{
    //     console.log("sub bekar")
    // }
    // x>2 ? console.log("sub bdhiya") : console.log("sub bekar")

    // let value = false
    // console.log(value)
   
    const [value, setvalue] = useState(false);
    console.log(value)

    const handleClick = ()=>{
        if(value===true){
            setvalue(false)
        }
        else{
            setvalue(true)
        }
    }

  return (
    <div>  
      {/* <Navbar/> */}
        {/* false        */}
        {/* {value ? <h1>THis is text one</h1>  :<h2>This is text two</h2> } */}

            {   value===true &&  <h1>THis is text one</h1>}
            {    value===false && <h2>This is text two</h2>}

      <button onClick={handleClick}>click me</button>
    </div>
  )
}

export default Rendering
