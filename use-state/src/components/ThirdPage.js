            import React from "react";
            import { Button } from "@material-tailwind/react";
            import bg_2 from '../images/bg_2.webp'

            const ThirdPage=()=>{
                return(
            //         <div>
                        

            // <div className="w-full h-screen mt-8 bg-cover bg-no-repeat bg-center"
            //         style={{backgroundImage: `url(${bg_2})`, height: "50vh"}}>

            // <div class="flex flex-col justify-left items-left h-screen ">
                    
            //         <div>
            //         <p className="text-white font-bold float-left mt-20 mx-32">BMW X RANGE</p>
            //         </div>
            //          <div>
            //          <p className="text-white text-2xl float-left mx-32 ">AND THEN SOME</p>
            //          </div>
            //          <div>
            //          <button class=" text-white border-white font-bold mx-32 mt-2 py-2 px-4 rounded">
            //          Explore More
            //          </button>
            //          <button className="text-white border-white font-bold mx-32 mt-2 py-2 px-4 rounded">
            //               Discover now
            //             </button>
            //          </div>

            //      </div>
            // </div>

            // </div>

            <div>
            {/* <div className="relative bg-cover bg-no-repeat bg-top h-1/2 mx-auto mt-8 flex items-center" 
                style={{backgroundImage: `url(${bg_2})`}}>
            </div> */}

            {/* <div className="w-full h-screen mt-8">
            <img src={bg_2}/>
            </div> */}

            <div className="w-full h-screen mt-8 bg-cover bg-no-repeat bg-center"
                style={{backgroundImage: `url(${bg_2})`, height: "50vh"}}>

            {/* <div class="flex flex-col justify-left items-left h-screen ">

            <div>
            <p className="text-white font-bold float-left mt-20 mx-32">BMW X RANGE</p>
            </div>
            <div>
            <p className="text-white text-2xl float-left mx-32 ">AND THEN SOME</p>
            </div>
            <div>
            <a href="https://www.bmw.com/en-au/discover/x-range.html">
            <button class=" text-white border border-white font-bold mx-32 mt-2 py-2 px-4 rounded">
            Explore More
            </button>
            </a>   
            </div>
                
            </div>   */}

<div class="flex flex-col justify-left items-start h-screen">
  <p class="text-white font-bold mx-32 mt-20">BMW X RANGE</p>
  <p class="text-white text-2xl mx-32">AND THEN SOME</p>
  <a href="https://www.bmw.com/en-au/discover/x-range.html">
    <button class="text-white border border-white font-bold mx-32 mt-2 py-2 px-4 rounded">
      Explore More
    </button>
  </a>   
</div>


            {/* <div class="flex flex-col justify-center items-center h-screen">
            <p class="text-white font-bold mt-20">BMW X RANGE</p>
            <p class="text-white text-2xl mt-8">AND THEN SOME</p>
            </div> */}

            </div>
            </div>
                )
            }
            export default ThirdPage;