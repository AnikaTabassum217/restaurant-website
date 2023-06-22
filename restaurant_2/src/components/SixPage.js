import React from "react";
import { Button } from "@material-tailwind/react";
import delivery_banner_bg from '../images/delivery-banner-bg.png'
import delivery_boy from '../images/delivery-boy.svg'

const SixPage=()=>{
return (
    <div className="mt-40">

       <div className="flex flex-wrap gap-0">

       <div className=" mx-auto lg:ml-80">
                  <div className=" text-black mt-20 text-5xl font-bold">
                  A Moments Of Delivered <br></br> 
                  On<span className="text-orange-600">Right Time </span> & Place
                  </div>
                  <div className="text-gray-800 mt-4">
                  The restaurants in Hangzhou also catered to many northern Chinese who had
                  <br></br>fled south from Kaifeng during the Jurchen invasion of the 1120s, while it is
                   <br></br>also known that many restaurants were run by families.
                  </div>
                 <div>
                 <Button className=" bg-yellow-800 hover:bg-black mt-2">Order Now</Button>
                 </div>
       </div>

        <div className=" bg-gray-00 ">
           {/* <img src={delivery_banner_bg} width="600" className="absolute top-0 right-40 z-20"></img> */}
          <img src={delivery_boy} width="600" className=" top-0 right-0 z-10 mx-auto lg:mx-32"></img>
                
        </div>

       </div>

       
    </div>
)
}
export default SixPage