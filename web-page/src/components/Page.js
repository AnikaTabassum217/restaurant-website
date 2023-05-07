import React from "react";

const Page=()=>{
    return(
        <div className=" mx-auto  flex flex-col  justify-between items-left p-6
        bg-violet-800 text-white md:flex sm:flex">
           <div className="p-12 font-bold text-3xl font-custom">
               <p>The Standard for<br></br>
               Influencer Marketing</p>


               
           </div>

           <div className="px-10 py-12 justify-center">
               <p>Traackr provides influencer discovery,vetting,relationship<br></br>
                   management,campaign organaization, measurment,<br></br>
                   and the industry's only influncer market performance <br></br>
                   benchmark
               </p>
           </div>

         <div>
         <span class=" px-10 inline-block text-white font-bold rounded-full 
         border  border-white  bg-red-500">Discover Trasckr</span>
         </div>

           
        </div>
    )
}
export default Page;