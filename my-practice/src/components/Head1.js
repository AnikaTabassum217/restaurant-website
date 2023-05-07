import React,{useState} from "react";
import Head2 from "../components/Head2";
import { UserContextExample } from "./UserContextExample";
const Head1=()=>{
const [user,setUser]=useState({id:101,name:"Anika Tabassum"})
const [text, setText] = useState("Hello I am Anika")

  return(
      <div>
        <UserContextExample.Provider value={{user,text}}>
        <Head2 user={user}/>
        </UserContextExample.Provider>
             
      </div>
  )
}
export default Head1