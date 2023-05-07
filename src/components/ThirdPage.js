import React from "react";
import { Button } from "@material-tailwind/react";
import about_banner from '../images/about-banner.png'
import  success from '../images/success.png'
import sale_shape_red from '../images/sale-shape-red.png'
const ThirdPage=()=>{
    return(
        <div>
            {/* <div className="flex flex-wrap-2 mt-20 ">
               

            <div className="flex flex-wrap bg-gray-300 relative ">
  <img src={about_banner} className=" top-20 right-20 z-20 mx-20"></img>
  <img src={sale_shape_red} className="absolute top-20 left-60 z-10"></img>

</div>



                <div className="flex flex-wrap bg-gray-500 mx-20 ">
                    <div className="font-bold text-5xl">
                    Caferio, Burgers, and <br></br>Best Pizzas <span className="text-orange-600">in Town!</span>
                    </div>
                    <div className="justify-items-start mt-2">
                    The restaurants in Hangzhou also catered to many northern Chinese who had <br></br>
                    fled south from Kaifeng during the Jurchen invasion of the 1120s, while it is<br></br>
                    also known that many restaurants were run by families.
                    </div>

                   <div className="w-1/2 mx-auto mt-4">
                   <div className="flex bg-gray-00">
                    <img src={success} width="30" height="30" className="mx-2 "></img>
                    Delicious & Healthy Foods
                    </div>

                    <div className="flex bg-gray-00 mt-2">
                    <img src={success} width="30" height="30" className="mx-2"></img>
                    Spacific Family And Kids Zone
                    </div>

                    <div className="flex bg-gray-00 mt-2">
                    <img src={success} width="30" height="30" className="mx-2"></img>
                    Music & Other Facilities
                    </div>
                    
                    <div className="flex bg-gray-00 mt-2">
                    <img src={success} width="30" height="30" className="mx-2"></img>
                    Fastest Food Home Delivery
                    </div>

                        <div className="flex bg-gray-00 mt-2">
                        <Button className="bg-yellow-800 hover:bg-black">Reservation</Button>  
                        </div>
                    
                   </div>

                   
                </div>
            </div> */}


                <div class="flex flex-wrap mt-20 ">
                <div class="flex flex-wrap bg-gray-00 ">
                    <img src={about_banner} class=" top-0 right-0 z-20  mx-auto lg:ml-80" alt="about_banner"></img>
                   
                
                </div>
                <div class="  bg-gray-00 mr-4">
                    <div class="font-bold text-5xl ">
                    Caferio, Burgers, and <br></br>Best Pizzas <span class="text-orange-600">in Town!</span>
                    </div>
                    <div class="justify-items-start mt-2">
                    The restaurants in Hangzhou also catered to many northern Chinese who had <br></br> fled south from Kaifeng during the Jurchen invasion of the 1120s, while it is<br></br> also known that many restaurants were run by families.
                    </div>
                    <div class="w-1/2 mx-auto mt-4">
                    <div class="flex bg-gray-00">
                        <img src={success} width="30" height="30" class="mx-2" alt="success"></img>
                        Delicious & Healthy Foods
                    </div>
                    <div class="flex bg-gray-00 mt-2">
                        <img src={success} width="30" height="30" class="mx-2" alt="success"></img>
                        Specific Family And Kids Zone
                    </div>
                    <div class="flex bg-gray-00 mt-2">
                        <img src={success} width="30" height="30" class="mx-2" alt="success"></img>
                        Music & Other Facilities
                    </div>
                    <div class="flex bg-gray-00 mt-2">
                        <img src={success} width="30" height="30" class="mx-2" alt="success"></img>
                        Fastest Food Home Delivery
                    </div>
                    <div class="flex bg-gray-00 mt-2">
                        <Button class="bg-yellow-800 hover:bg-black">Reservation</Button>
                    </div>
                    </div>
                </div>
                </div>

        </div>
    )
}
export default ThirdPage