import React from "react";
import { Button } from "@material-tailwind/react";
import car1 from '../images/car1.webp'
import car2 from '../images/car2.webp'
import car3 from '../images/car3.webp'

const ShoppingTool=()=>{
    return(
        <div>
           <div class="mx-auto w-1/6 mt-10">
               <div><p className="font-bold mx-28">SHOPPING TOOLS</p></div>
                <div><p className="text-4xl">FIND YOUR BMW.</p></div>
            </div>

            <div className="flex flex-col md:flex-row">
                <div>
                <div>
                <img src={car1} width="600" height="600" />
                </div>
                <div>
                New Car Locator
                </div>
                <a href="https://shop.bmw.com.au/#/">
                <div className="mt-8 text-black-900">
                <Button className="text-black border-black" variant="outlined">Search now</Button>
                </div>
                </a>
                </div>
                

                <div>
                <div>
                <img src={car2} width="600" height="600" />
                </div>
                <div>
                Request a Test Drive
                </div>
               <a href="https://www.bmw.com/en-au/fastlane/request.html?type=td">
               <div className="mt-8">
                <Button className="text-black border-black" variant="outlined">Book now</Button>
                </div>
               </a>
                </div>

                <div>
                <div>
                <img src={car3} width="600" height="600" />
                </div>
                <div>
                Build Your Own
                </div>
                <a href="https://www.bmw.com/en-au/configurator.html">
                <div className="mt-8">
                <Button className="text-black border-black" variant="outlined">Build & Price</Button>
                </div>
                </a>
                
                </div>

            </div>
                   {/* <div class="flex flex-col md:flex-row">
  <div class="md:w-1/3">
    <div>
      <img src={car1} width="600" height="600" />
    </div>
    <div>
      New Car Locator
    </div>
    <div class="mt-8 text-black-900">
      <Button class="text-black border-black" variant="outlined">Search now</Button>
    </div>
  </div>

  <div class="md:w-1/3 md:mx-4 mt-8 md:mt-0">
    <div>
      <img src={car2} width="600" height="600" />
    </div>
    <div>
      Request a Test Drive
    </div>
    <div class="mt-8">
      <Button class="text-black border-black" variant="outlined">Book now</Button>
    </div>
  </div>

  <div class="md:w-1/3 mt-8 md:mt-0">
    <div>
      <img src={car3} width="600" height="600" />
    </div>
    <div>
      Build Your Own
    </div>
    <div class="mt-8">
      <Button class="text-black border-black" variant="outlined">Build & Price</Button>
    </div>
  </div>
</div> */}

        </div>


    //     <div>
    //     <div class="mx-auto w-1/6 mt-10">
    //        <div><p className="font-bold mx-16 mt-2">SHOPPING TOOLS</p></div>
    //         <div><p className="text-2xl mx-4">FIND YOUR BMW.</p></div>
    //     </div>
    //     <div class="grid grid-cols-1 md:grid-cols-3 gap-3">

    //     <div class=" p-4">
    //     <div className=" m-20 mt-28">
    //     <div>
    //     <img src={car1} width="600" height="600"/>
    //     </div>
    //     <div className="mx-10">
    //     New Car Locator
    //     </div>
    //     <div>
    //     <a href="https://shop.bmw.com.au/#/">
    //     <button class="mx-10 mt-0 border-2 border-black text-black font-bold py-2 px-4 rounded">
    //     Search Now
    //     </button>
    //     </a>    
        
    
    //     </div>
    //     </div>
    //     </div>


    //     <div class=" p-4">
    //     <div className=" m-20 mt-28">
    //     <div>
    //     <img src={car2} width="600" height="600"/>
    //     </div>
    //     <div className="mx-10">
    //     Request a Test Drive
    //     </div>
    //     <div>
    //     <a href="https://www.bmw.com/en-au/fastlane/request.html?type=td">
    //     <button class="mx-14 mt-0 text-black font-bold py-2 px-4 rounded border-2 border-black">
    //     Book Now
    //     </button>
    //     </a>   
        
    //     </div>
    //     </div>
    //     </div>


    //     <div class=" p-4">
    //     <div className=" m-20 mt-28">
    //     <div>
    //     <img src={car3} width="600" height="600"/>
    //     </div>
    //     <div class="mx-14">
    //     Build Your Own
    //     </div>
    //     <div>
    //     <a href="https://www.bmw.com/en-au/configurator.html">
    //     <button class="mx-12 text-black font-bold py-2 px-4 rounded border-2 border-black">
    //     Build & Price
    //     </button>
    //     </a>
    //     </div>
    //     </div>


    //     </div>
    //     </div>

       
    // </div>
    )
}
export default ShoppingTool;