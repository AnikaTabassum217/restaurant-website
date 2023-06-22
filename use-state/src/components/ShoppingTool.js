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

    

        </div>


 
    )
}
export default ShoppingTool;