import React,{useState} from "react";

const Second=()=>{
  const [name,setName]=useState({firstName: '', lastName:''})


    return (
        <div>
            <form>
                <input
                type='text'
                value={name.firstName}
                onChange={e=>setName({...name, firstName: e.target.value})}
                ></input>
            
                <input
                type='text'
                value={name.lastName}
                onChange={e=>setName({...name, lastName: e.target.value})}
                ></input>
            </form>

            <h1>You first name is-{name.firstName}</h1>
            <h1>You last name is-{name.lastName}</h1>
           
        </div>
    )
}

export default Second;