import React,{useState} from "react";

const First=()=>{

  const [increment,setIncrement]=useState(0)
  const [decrement,setDecrement]=useState(0)
  const [count,setCount]=useState(0)
 

  const handleIncrement=()=>{
    setIncrement(increment+1);
  }

  const handleDecrement=()=>{
      setDecrement(decrement-1)
  }

  const handleCount=()=>{
   for(let i=0;i<5;i++){
     setCount(previousCount => previousCount+1)
   }
  }

  const handleReset=()=>{
    setCount(0)
  }

    return (
        <div>
            <h1>Increment:{increment}</h1>
            <button onClick={handleIncrement}>Increment</button>
            

            <h1>Decrement:{decrement}</h1>
            <button onClick={handleDecrement}>Decrement</button>
            

            <h1>Each time 5 increments:{count}</h1>
            <button onClick={handleCount}>Count</button>

            {/* <p>---------------0-------------</p> */}
        </div>
    )
}

export default First;