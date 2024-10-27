import React, { useEffect, useState } from 'react'

const Navbar = ({ appdata,logo}) => {

const [numberstate, setNumberstate] = useState(0)
const [stringstate, setstringstate] = useState("a")
const [arraystate, setArraystate] = useState([
"a",false,0
])

const[count,setCount]=useState(0);
useEffect(()=>{
    /*alert('effect rendered')*/
    console.log('count is'+count)
},[count])
    return(
        <>
        {/* {appdata.appname} {logo}*/}
        <button className=' bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ... size-20 w-[100rem] h-[4rem] bg-blue-500 text-white place-content-around' onClick={()=>{setCount(count+1)}}>
        Count {count}
        </button>
      
        </>
    )
}
export default Navbar