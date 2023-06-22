import { Button } from "@material-tailwind/react";

import React from "react";
import hero_bannar_bg from '../images/hero-banner-bg.png'
import hero_bannar from '../images/hero-bg.jpg'
import hero_banner_1 from '../images/hero-banner.png'



const FirstPage=()=>{
  return(
      <div>
          <div>
         <div  className="relative bg-cover bg-center h-screen  mx-auto" 
                   style={{
                    backgroundImage: `url(${hero_bannar})`,
         }}>

          <div className="grid grid-cols-3 gap-2 sticky top-4 z-10 text-orange-800">
            <div className=" p-4 text-white text-xl font-bold">Foodie <span className="text-orange-600">.</span></div>
            <div className=" p-4 text-white hidden md:flex  flex items-center justify-end">
              <div className="font-bold hover:text-orange-600">Home</div>
              <div className="mx-4 font-bold hover:text-orange-600">About Us</div>
              <div className="font-bold hover:text-orange-600">Shop</div>
              <div className="mx-4 font-bold hover:text-orange-600">Blog</div>
              <div className="font-bold hover:text-orange-600">Contact Us</div>
            </div>
            <div class=" p-4 text-white">
            <Button className="bg-yellow-800 hover:bg-black">Reservation</Button> 
            </div>
            </div>   
            
                   


    <div className="flex flex-wrap gap-2">
        <div className=" mx-20 mt-auto lg:mt-40">
          <div>
          <p className="text-orange-600 italic">Eat Sleep And</p>
          </div>
          <div className="text-white text-7xl">
            <p>Supper delicious <br></br> Burger in town!</p>
          </div>
          <div className="text-white mt-4">
            <p>Food is any substance consumed to provide nutritional <br></br> support for an organism.</p>
          </div>
          <div class=" p-4 text-white">
            <Button className="bg-yellow-800 hover:bg-white  hover:text-black">Book A Table</Button> 
          </div>
        </div>
        <div className="mx-60 mt-20 hidden md:flex">
        <img src={hero_banner_1}>
        </img>
        </div>
    </div>

  </div>
</div>

      </div>
  )
}
export default FirstPage