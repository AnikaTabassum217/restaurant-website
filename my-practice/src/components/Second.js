import React,{useState} from "react";

const Second=()=>{


  const [count,setCount]=useState(0)
 
  const handleIncrement =()=>{
      setCount(count+1)
  }
  const handleDecrement=()=>{
      setCount(count-1)
  }
  const handleCount=()=>{
      setCount(0)
  }

    return (
        <div>
            <h1>Count:{count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleCount}>Reset</button>
        </div>
    )
}

export default Second;