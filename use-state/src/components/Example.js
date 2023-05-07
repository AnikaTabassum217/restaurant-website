// import React,{useState} from "react";
// import { Button } from "@material-tailwind/react";

// const Example=()=>{
//     const [count,setCount]=useState(0);
//     const [countDigit,setcountDegit] = useState(0);
//     const [color,setColor] = useState('red');

//     const [imgfile,uploadimg] = useState("");

//     const imgFileHandler = (e)=>{
//         if(e.target.files.length !==0){
//             uploadimg(URL.createObjectURL(e.target.files[0]))
//         }
        
//         }
        

//     const handleIncrement =()=>{
//         setCount(count+1)
//     }

//     const handleDecrement =()=>{
//         setcountDegit(countDigit-1)
//     }

//     const handlechange=()=>{
//         setColor('blue')
//     }


//     return (
//         <div>
//             <h1>Increment:{count}</h1>      
//             <button onClick={handleIncrement}>Increment</button>
//             <h3>Decrement: {countDigit}</h3>
//             <button onClick={handleDecrement}>Decrement</button>
//             <h1>Color: {color}</h1>
//             <button onClick={handlechange}>Color</button>
//             <center>
//                 <h1>Image Preview</h1>
//                 <h2>React JS</h2>
//                 <input type="file" onChange={imgFileHandler}/><br></br>
//                 <img src={imgfile} height='250' width='250' alt='imgpreview'></img>
//             </center>

//             <Button>Button</Button>

            
//         </div>

        
//     )
// }
// export default Example