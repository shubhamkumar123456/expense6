import React, { useRef } from 'react'

const Form = () => {

    let nameRef = useRef()
    let emailRef = useRef()
    let passwordRef = useRef()
    let addressRef = useRef()
    let maleRef = useRef()
    let femaleRef = useRef()

    // let textRef = useRef()
    //method-1 onchange

    // hook use ref hook


    function handleSubmit (){

        let gender ;   //undefined
        if(maleRef.current.checked ===true){
            gender = 'male'
        }
        else{
            gender = 'female'
        }
        let obj = {
            name:nameRef.current.value,
            email:emailRef.current.value,
            password:passwordRef.current.value,
            address:addressRef.current.value,
            gender:gender
        }
        console.log(obj)
    //  console.log("hello")
    // console.log(textRef.current.innerText)
        
    }
    return (
        <div className='formpage'>
            {/* <h1 ref={textRef}>THis is form page</h1> */}

            <div >
                <label htmlFor="">Name</label>
                <input ref={nameRef} type="text" /> <br />
                <label htmlFor="">Email</label>
                <input ref={emailRef} type="email" /> <br />
                <label htmlFor="">Password</label>
                <input ref={passwordRef} type="password" /><br />
                <label htmlFor="">Address</label>
                <textarea ref={addressRef} name="" id=""></textarea> <br />
                <div>
                    <label htmlFor="">Gender:</label>
                    <label htmlFor="">Male</label>
                    <input value="male" ref={maleRef} name='gender' type="radio" />
                    <label htmlFor="">Female</label>
                    <input value="female" ref={femaleRef} name='gender' type="radio" />
                </div>
                <br />
                <button onClick={handleSubmit}>submit</button>
            </div>
        </div>
    )
}

export default Form
