import React, { useRef, useState } from 'react'
import Navbar from '../components/Navbar';

const ExpenseTracker = () => {

    let snoRef = useRef();
    let priceRef = useRef();
    let placeRef = useRef();

    let headingRef = useRef()
    const [arr, setarr] = useState([
        {
            id:1,
            place:"lucknow",
            price:500
        },
        {
            id:'2',
            place:"Movie",
            price:250
        },
        {
            id:3,
            place:"Petrol",
            price:200
        },
        
    ]);
    console.log(arr)

    // let arr = 

    // let data = [1,2,7,8];
    // let x = data
    // // console.log(x)
    // x.pop();
    // x.pop();
    // console.log(x) //[1,2]
    // console.log(data)  //[1,2,7,8]

    const handleSubmit = (e)=>{
        e.preventDefault();
        // console.log('running');
        // console.log(headingRef.current.innerHTML)

        let obj = {
            id:snoRef.current.value,
            place:placeRef.current.value,
            price:priceRef.current.value
        }

        console.log(obj)

        if(!obj.place || !obj.price || !obj.id ){
            return alert('please fill all the fields')
        }


        let copyArr = [...arr]
        copyArr.push(obj)
        console.log(copyArr)

        setarr(copyArr)
        // setarr(obj)
        // arr.push(obj)
        // console.log(arr)


    }

    const handleDelete = (ans,i)=>{
        console.log(ans);
        console.log(i);
        let copyArr = [...arr]
        copyArr.splice(i,1)
        // arr.splice(i,1)
        setarr(copyArr)
        // console.log("del btn running")
       
    }

    const [value, setvalue] = useState(true); //false// true

  return (
    <div>
        {/* <Navbar/> */}
      {/* <h1 style={ {textAlign:'center'}}>This is Expense tracker App</h1> */}
      <h1 ref={headingRef} className='title'>This is Expense tracker App</h1>
       {/* <p> { arr[0].place} </p>   
       <p> { arr[0].price}   </p>

        {arr[1].place}
        {arr[1].price}

        {arr[2].place}
        {arr[2].price} */}
            {/* <h3>Hello one</h3> <h3>Hello Two</h3> <button>click here</button> */}

            {   value ?
             <button onClick={()=>setvalue(false)} style={{margin:"20px auto",width:"150px",display:"block"}}>Add Items</button>
               : 
                <form action="" className='expenseForm'>
            <button type='button' onClick={()=>setvalue(true)} className='btnClose'>X</button>
            <input ref={snoRef} type="number" placeholder='serial no' />
            <input ref={placeRef} type="text" placeholder='enter the place' />
            <input ref={priceRef} type="number" placeholder='enter the price' />
            <button onClick={handleSubmit}>Submit</button>
        </form>   }

            


       

    <table border={1} className='table'>
        <thead>
                <tr>
                    <th>Sno</th>
                    <th>Place</th>
                    <th>Price</th>
                    <th></th>
                </tr>
        </thead>
        <tbody>
            {
                arr.map((ele,index)=>{
                    return <tr key={ele.id}>
                    <td>{index+1}</td>
                    <td>{ele.place}</td>
                    <td>{ele.price}</td>
                    <td><button onClick={()=> handleDelete(ele,index)}>Delete</button></td>
                </tr>
                })
            }
           
        </tbody>
    </table>


        {/* {
            arr.map(( ele,index)=>{
                return <div>
                    <p>{ele.place}</p>
                    <p>{ele.price}</p>
                </div>
            })
        } */}
    </div>
  )
}

export default ExpenseTracker
