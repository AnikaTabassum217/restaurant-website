import React,{useRef} from "react";

const UseRefExample=()=>{

    const userNameRef=useRef();
    const passwordRef=useRef();

    const handleSubmit=(event)=>{
        event.preventDefault();
        const userName = userNameRef.current.value;
        const password = passwordRef.current.value;
        console.log({userName,password})
    }


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="userName">
                  UserName:
                </label>
                <input type="text" id ="userName" ref={userNameRef}></input>
            </div>

            <div>
                <label htmlFor="userName">
                  Password:
                </label>
                <input type="text" id ="password" ref={passwordRef}></input>
            </div>
            <button type="submit">Register</button>
        </form>
    )
}

export default UseRefExample;