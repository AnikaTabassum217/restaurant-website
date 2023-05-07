import React from "react";

const Card=(props)=>{

    console.log(props)
    
    return(
        <div>
            Hello
            <p>{props.titleText}</p>
            <p>{props.descText}</p>
        </div>
    )
}

//Destructuring

// const Card=(props)=>{
//     console.log(props)
//     
//     const {titleText,descText}=props;
    
//     return(
//         <div>
//             Hello
//             <p>{titleText}</p>
//             <p>{descText}</p>
//         </div>
//     )
// }
export default Card;