import React from "react";
import { Button } from "@material-tailwind/react";
import hero_bannar from '../images/hero-bg.jpg'
import cta_banner from '../images/cta-banner.png'
import sale_shape from '../images/sale-shape.png'

const FivePage=()=>{
return(
    <div className="bg-gray-300">
        
        <div className="relative bg-cover bg-center h-screen  mx-auto" 
                   style={{
                    backgroundImage: `url(${hero_bannar})`, height: "100vh"}}
        
        >


            <div className="flex flex-wrap">
               
              <div className="mx-20 ">
                  <div className="text-white mt-20 text-5xl font-bold">
                  The Foodie Have Excellent <br></br> 
                  <span className="text-orange-600">Of Quality Burgers!</span>
                  </div>
                  <div className="text-white mt-2">
                  The restaurants in Hangzhou also catered to many northern Chinese who had 
                  <br></br>fled south from Kaifeng during the Jurchen invasion of the 1120s, while it is also
                   <br></br>known that many restaurants were run by families.
                  </div>
                 <div>
                 <Button className="bg-yellow-800 hover:bg-black mt-2">Order Now</Button>
                 </div>
              </div>

              <div className="float-left ">
              <div className="flex flex-cols justify-start items-start">
                    <img src={cta_banner} width="800" className="absolute  top-0 right-0 z-20 " >
                    </img>
                    {/* <img src={sale_shape} width="200" className="absolute top-0 right-76 z-20">
                    </img> */}
             </div>                  
              </div>

           </div>
            

        </div>
    </div>
)
}
export default FivePage
