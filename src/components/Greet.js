import React, { useState } from 'react'

// function Greet(){
//     return (
//         <h1>Hello Sahan</h1>
//     )
// }


const Greet = (props) => {
    
    const [message, setMessage] = useState('welcome visitor');
    const handlechange=()=>{
        setMessage('Good Morning')
    }

    return(
    <div>
        <h1>Hello {props.name} Birthday {props.birthday}</h1>
        <h2>{message}</h2>
        <button onClick={()=>handlechange()}>Change State</button>
    </div>
    )
} 

export default Greet;