// import React from "react";
// import { Button } from "@material-tailwind/react";

// import BMW from '../images/Bmw.jpg'
// import BMWLogo_1 from '../images/BMWLogo_1.jpg'

// const Page =()=>{
//     return (
//         <div>

//             {/* Image  */}
//                   {/* <img src={BMW}> 
//                   </img> */}

//             {/* <div  className="relative bg-cover bg-center h-screen  mx-auto" 
//                    style={{
//                     backgroundImage: `url(${BMW})`,
//                   }}>
                      

//             </div>  */}

//     <div className="relative bg-cover bg-center h-screen mx-auto " 
//     style={{backgroundImage: `url(${BMW})`}}>

        
//         <div class="grid grid-cols-2">
//         <div className="flex mt-4 mx-40 text-white flex-shrink-0 whitespace-nowrap text-xl">
//            <div className="mx-4">logo</div>
//            <div className="mx-4">Models</div>
//            <div className="mx-4">Electric</div>
//            <div className="mx-4">Build your BMW</div>
//            <div className="mx-4">Shop online</div>
//            <div className="mx-4">More BMW</div>
//         </div>
//         <div className="mt-4 text-white">Column 2</div>
//         </div>

//     <div className="absolute top-16 w-full">
//         <hr className="border-t-2 border-gray-300 mx-auto" />
//     </div>

//        <div className="float-left mx-44">
//         <p className="text-white mt-8">The <span className="font-bold ">Ultimate</span> Driving Machine</p>
//        </div>

//         <div class="flex justify-left items-center h-screen">
//             <p className="text-white text-2xl float-left">The<br></br>
//             <span className="text-9xl">XM</span><br></br>
//             <span>THE NEW BMW XM MODELS:ALL HIHGLIGHTS.</span>
//             </p>

//             <div class="mt-80 float-left">
//                 <button class="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                     Discover now
//                 </button>
//             </div>

            
//         </div>

//         </div>         
//         </div>
//     )
// }

// export default Page
    
import React from "react";
//import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";

import BMW from "../images/Bmw.jpg";
import search from "../images/search.png";
import gps from "../images/gps_1.png";
import user from "../images/user_5.png";
import cart from "../images/cart_6.png";
import BMWLogo from "../images/bmw_logo_4.png";

const Page = () => {
  return (
    <div>
      
      <div
        className="relative bg-cover bg-center h-screen mx-auto"
        style={{ backgroundImage: `url(${BMW})` }}
      >


<div class="grid grid-cols-4 gap-4">
  <div class="col-span-1 ">
    <div>
    <div className="mx-44 mt-2 w-10 h-10 object-contain mt-4">
            <img src={BMWLogo} />
            </div>
    </div>
  </div>
  <div class="col-span-2 ">
    <div className="flex item-center text-white mt-4">
    <a href="https://www.bmw.com/en-au/models.html">
    <div className="mx-4 font-bold hidden md:block  ">Models</div>
    </a>
            <div className="mx-4 font-bold hidden md:block">Electric</div>
           <a href="https://www.bmw.com/en-au/configurator.html">
           <div className="mx-4 font-bold hidden md:block">Build your BMW</div>
           </a>
            <div className="mx-4 font-bold hidden md:block">Shop online</div>
            <div className="mx-4 font-bold hidden md:block">More BMW</div>
    </div>
  </div>
  <div class="col-span-1 ">
  <div className="flex mt-4 text-white">
            <div>
              <img src={user} className="w-1/3 h-auto mt-2" />
            </div>
            <div>
              <a href="https://www.bmw.com/en-au/shop/ls/cart" >
              <img src={cart} className="w-1/3 h-auto mt-2" />
              </a>
            </div>
            <div>
             <a href="https://www.bmw.com/en-au/fastlane/dealer-locator.html">
             <img src={gps} className="w-1/3 h-auto mt-2" />   
             </a>
            </div>
            <div>
            <a href="https://www.bmw.com/en-au/publicPools/search-results/search-results.html">
            <img src={search} className="w-1/3 h-auto mt-2 object-cover" />
            </a>
             
            </div>
          </div>
          
  </div>
</div>






        {/* <div className="grid grid-cols-2">     
          <div className="flex mt-4 mx-4 md:mx-20 text-white flex-shrink-0 whitespace-nowrap text-xl">
          <div className="mx-4 mt-2 w-10 h-10 object-contain">
            <img src={BMWLogo} />
            </div>
            <div className="mx-4 hidden md:block">Models</div>
            <div className="mx-4 hidden md:block">Electric</div>
            <div className="mx-4 hidden md:block">Build your BMW</div>
            <div className="mx-4 hidden md:block">Shop online</div>
            <div className="mx-4 hidden md:block">More BMW</div>
          </div>
          <div className="flex mt-4 mx-4 md:mx-64 text-white">
            <div>
              <img src={user} className="w-1/2 h-auto mt-2" />
            </div>
            <div>
              <img src={cart} className="w-1/2 h-auto mt-2" />
            </div>
            <div>
              <img src={gps} className="w-1/3 h-auto mt-2" />
            </div>
            <div>
              <img src={search} className="w-1/2 h-auto mt-2" />
            </div>
          </div>
        </div> */}

        {/* <div className="absolute top-16 w-full">
          <hr className="hidden md:block border-t-2 border-gray-300 mx-auto" />
        </div> */}

<div className="absolute top-16 w-full">
          <hr className="size=30" />
        </div>

        <div className="hidden md:block float-left mx-4 md:mx-44">
          <p className="text-white mt-4">
            The <span className="font-bold ">Ultimate</span> Driving Machine
          </p>
        </div>

        {/* <div className="flex flex-col justify-left items-left h-screen float-left ">
          <div className="mt-28 float-left">
            <p className="text-white font-bold float-left mt-20 ">The</p>
          </div>
          <div>
            <p className="text-white text-9xl float-left ">XM</p>
          </div>
          <div>
            <p className="text-white float-left ">
              THE NEW BMW XM MODELS:ALL HIHGLIGHTS.
            </p>
          </div>
          <div>
            <a href="https://www.bmw.com/en-au/models/m-series/bmw-i7-m70/showroom/i7-m70.html">
            <button className="w-full md:w-auto bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Discover now
            </button>
            </a>
          </div>
        </div> */}


<div class="flex flex-col justify-left items-start h-screen mt-60">
  <p class="text-white  font-bold mx-32 mt-20">The</p>
  <p class="text-white text-9xl mx-32">XM</p>
  <p class="text-white  font-bold mx-32 ">THE NEW BMW XM MODELS:ALL HIHGLIGHTS.</p>
  <a href="https://www.bmw.com/en-au/models/m-series/bmw-i7-m70/showroom/i7-m70.html">
            <button className="w-full md:w-auto bg-blue-900 hover:bg-blue-700 text-white font-bold mx-32 py-2 px-4 rounded">
              Discover now
            </button>
            </a>  
</div>


      </div>

    </div>
  );
};

export default Page;