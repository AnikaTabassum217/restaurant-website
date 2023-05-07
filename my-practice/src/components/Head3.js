import React,{useContext} from "react";
import { UserContextExample } from "./UserContextExample";

const Head3=()=>{
    const {user,text} = useContext(UserContextExample)
    console.log(user)
    console.log(text)
  return(
      <div>
        <h1>{text}</h1>
           <h1>{user.id}</h1>
            <h1>{user.name}</h1>
      </div>
  )
}
export default Head3