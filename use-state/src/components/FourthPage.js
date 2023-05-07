import React from "react";
import { Button } from "@material-tailwind/react";
import car4 from '../images/car4.webp'
import car5 from '../images/car5.webp'
import car6 from '../images/car6.jpeg'

const FourthPage=()=>{
    return (
        // <div>
        //     <div className="">

        //     <div className="flex m-20 mt-28">
        //     <div>
        //     <img src={car4}/>
        //     </div>
        //     <div className="ml-8">
        //          BMW FINANCIAL SERVICES
        //         <p>CURRENT FINANCE <br></br> OFFERS.</p> 
        //         <p>View our current Financial Services offers today.</p>
        //         <Button className="text-black border-black" variant="outlined">Book now</Button>
        //     </div>
        //     </div>

        //      <div className="w-1/2 h-screen mt-8 ml-16">
             
        //      <div className="flex ">
        //      <div>
        //     <img src={car5}/>
        //     </div>
        //     <div>
        //         <p>SAFETY RECALLS.</p>
        //         <p>
        //         BMW Group Australia takes all safety recalls very seriously. Our customer's safety in our products continues to be of<br></br>
        //         paramount importance and it remains our objective to have all vehicles subject to any recall rectified as soon as possible.   
        //         </p>
                
        //      </div>
        //      </div>


        //     <div className="mt-12 mr-80">
        //     * Overseas model displayed with optional equipment.
        //     </div>
        //     </div> 

        //     </div>
        // </div>


        <div>
            <div className="">

            <div  className="flex flex-col items-center md:flex-row">
            <div className="w-1/2 m-20 mt-28">
            <img src={car4}/>
            </div>
            <div>
               <p className="font-bold">BMW AUSTRALIA OFFERS</p>
               <p className="text-3xl">CURRENT OFFERS.</p>
               <p className="font-bold">View our current BMW Australia offers today.</p>
               <a href="https://www.bmw.com/en-au/offers-and-services/promotions/bmw-finance-offers.html">
               <button class="w-full md:w-auto text-black border border-black font-bold mt-2 py-2 px-4 rounded">
            Explore More
            </button>
               </a>
               
            </div>
            </div>


            <div class="flex flex-col items-center md:flex-row">
                <div class=" p-4">
                <div>
                    <p className="font-bold">BMW FINANCIAL SERVICES</p>
                    <p className="text-5xl">FINANCE DESIGNED ESPECIALLY FOR YOUR BMW.</p>
                    <p className="">Driver Driven Finance.</p>
                    <a href="https://www.bmw.com/en-au/offers-and-services/financial-services.html">
                    <button class="w-full md:w-auto text-black border border-black font-bold mt-2 py-2 px-4 rounded">
                    Find out More
                    </button>
                    </a>                       
                    </div>
                </div>
  <div class=" p-4">
  <div className="w-full  mx-0 ">
            <img src={car6}/>
            </div>
  </div>
</div>
            

            {/* <div  className="flex flex-col items-center md:flex-row">
            <div>
               <p className="font-bold">BMW AUSTRALIA OFFERS</p>
               <p className="text-3xl">CURRENT OFFERS.</p>
               <p className="font-bold">View our current BMW Australia offers today.</p>
               <button class="w-full md:w-auto text-black border-black font-bold mt-2 py-2 px-4 rounded">
            Explore More
            </button>
            </div>
            <div className="w-1/2 mx-80 ">
            <img src={car6}/>
            </div>
            </div> */}


            {/* <div  className="flex flex-col items-center md:flex-row">
            
            <div>
               <p className="font-bold">BMW AUSTRALIA OFFERS</p>
               <p className="text-3xl">CURRENT OFFERS.</p>
               <p className="font-bold">View our current BMW Australia offers today.</p>
               <button class="w-full md:w-auto text-black border-black font-bold mt-2 py-2 px-4 rounded">
            Explore More
            </button>
            </div>
            <div className="w-1/2 m-20 mx-32">
            <img src={car6}/>
            </div>
            </div> */}

            {/* <div className=" m-20 mt-28">
            <img src={car5}/>
            </div> */}
{/* 
             <div className="w-1/2 h-screen mt-8 ml-16">
           <div className="">
           <div>
            <img src={car5}/>
            </div>

            <div>
               <p className=" text-3xl">SAFETY RECALLS.</p>
               <p className="text-xl">BMW Group Australia takes all safety recalls very seriously. Our customer’s safety in our products continues to be of paramount importance and it remains our objective to have all vehicles subject to any recall rectified as soon as possible.</p>
               <button class=" text-black border-black font-bold mt-2 py-2 px-4 rounded">
            Find out More
            </button>
            </div>
           </div>
            
            <div className="mt-12 mr-80">
            * Overseas model displayed with optional equipment.
            </div>
            </div>  */}


         <div  className="flex flex-col items-center justify-center sm:flex-row">
            
            <div className="w-1/2 m-20 mt-28">
            <img src={car5}/>
            {/* <p> * Overseas model displayed with optional equipment.</p> */}
            </div>
            
            
            <div>
            <p className=" text-3xl">SAFETY RECALLS.</p>
               <p className="text-xl">BMW Group Australia takes all safety recalls very seriously.
               <br></br>Our customer's safety in our products continues to be of <br></br>
               paramount importance and it remains our objective to <br></br>have all vehicles subject to any recall rectified <br></br>as soon as possible. </p>
              <a href="https://www.recall.bmw.com.au/">
              <button class="w-full md:w-auto text-black border border-black font-bold mt-2 py-2 px-4 rounded">
               Find out More
            </button>
              </a>
               
            </div>
           
            </div>
           

    
            </div>


            {/* <div class=" flex flex-col  grid grid-cols-4" >
  <div class=" p-4 ">
   <div className="mx-10 mt-10 ">CONTACT</div>
   <div className="mx-10 font-bold hidden md:block">Contact us</div>
   <div className="mx-10 font-bold hidden md:block">Find a Dealer</div>
   <div className="mx-10 font-bold hidden md:block">Contact BMW Financial Services</div>
  </div>
  <div class=" p-4">
  <div className="mx-10 mt-10 ">QUICK LINKS</div>
   <div className="mx-10 font-bold hidden md:block">BMW Safety Recalls</div>
   <div className="mx-10 font-bold hidden md:block">New Car Locator</div>
   <div className="mx-10 font-bold hidden md:block">Apply for Finance</div>
   <div className="mx-10 font-bold hidden md:block">Book a Service</div>
  </div>
  <div class=" p-4">
  <div className="mx-10 mt-10 ">EXPERIENCE BMW</div>
   <div className="mx-10 font-bold hidden md:block">Careers</div>
   <div className="mx-10 font-bold hidden md:block">BMW i</div>
   <div className="mx-10 font-bold hidden md:block">BMW X Range</div>
   <div className="mx-10 font-bold hidden md:block">BMW Driving Experience</div>
   <div className="mx-10 font-bold hidden md:block">BMW Connected Drive</div>
  </div>
  <div class=" p-4">
  <div className="mx-10 mt-10 ">LEGAL</div>
   <div className="mx-10 font-bold hidden md:block">Connected Drive Legal Information</div>
  </div>
            </div>   */}
        </div>
    )
}
export default FourthPage;