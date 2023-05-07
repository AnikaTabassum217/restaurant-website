import React from "react";
import banner_1 from '../images/banner-1.jpg'
import banner_2 from '../images/banner-2.jpg'
import banner_3 from '../images/banner-3.jpg'
import banner_4 from '../images/banner-4.jpg'

const EightPage=()=>{
   return(
    
   <>

<div class="flex flex-wrap justify-start items-start mt-20">

{/* <div class="flex-10 p-4 bg-red-900">
    <img src={banner_1} width="500" class="mx-60 mr-8 mt-12" />
    <div class="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
        <p class="text-white text-2xl font-bold">50% Off Now!<br />
        Discount For Delicious Tasty Burgers!<br />
        <span class="text-sm">Sale off 50% only this week</span>
        </p>
    </div>
</div> */}

{/* <div class="flex-10 p-4 bg-red-00 mx-auto lg:ml-28 mr-[-3.5rem] mt-1">
    <img src={banner_1} width="490" class="mx-4 sm:mx-8 md:mx-12 lg:ml-80 mt-12 max-w-full" />
</div> */}

<div className="flex-10 p-4 bg-red-00 mx-auto lg:ml-28 mr-[-3.5rem] mt-1">
  <div className="relative">
    {/* <img src={banner_1} width="490" className="mx-4 sm:mx-8 md:mx-12 lg:ml-80 mt-12 max-w-full" /> */}
    <img src={banner_1} width="490" className="mx-4 sm:mx-8 md:mx-12 lg:ml-80 mt-12 max-w-full hover:scale-110" />

    <span className="absolute top-1/3 right-0 left-1/3 text-white text-3xl px-2 py-1 ">
    <p class="text-white text-2xl font-bold">50% Off Now!<br />
        Discount For Delicious Tasty Burgers!<br />
        <span class="text-sm">Sale off 50% only this week</span>
        </p>
        <button className="bg-yellow-900 hover:bg-black absolute top-1/6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white py-1 px-2 rounded-md shadow-md">
            Order Now
        </button>
    </span>
  </div>
</div>



  <div class=" flex flex-col h-screen ">
  <div class="">
  <div class="flex flex-wrap gap-1">
  <div class="flex-30 p-1 bg-orange-00">
    
  <div className="bg-gray-00 relative">
                {/* <img src={banner_3} width="230" height="100" className="mt-16 " /> */}
                <img src={banner_3} width="230" height="100" className="mt-16 transform hover:scale-110" />


                <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                    <p className="text-white text-2xl font-bold">Delicious Pizza
                    <br></br><p className="text-white text-sm">Sale off 50% only this week</p>
                    </p>
                                                        
                </div>

                <button className="bg-yellow-900 hover:bg-black absolute bottom-1/4 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-white py-1 px-2 rounded-md shadow-md">
                   Order Now
                </button>
            </div>
  </div>
 
<div class="flex-23 p-1 bg-orange-00">
    
    <div className="bg-gray-00 relative w-200">
                  <img src={banner_2} width="230" height="100" className="mt-16 transform hover:scale-110" />
  
                  <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                      <p className="text-white text-2xl font-bold">Delicious Pizza
                      <br></br><p className="text-white text-sm">Sale off 50% only this week</p>
                      </p>
                                                          
                  </div>
  
                  <button className="bg-yellow-900 hover:bg-black absolute bottom-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white py-2 px-4 rounded-md shadow-md">
                     Order Now
                  </button>
     </div>
  </div>
  
  
</div>

  </div>
  <div class="bg-gray-00 ">
  <div className="bg-gray-00 relative">
                <img src={banner_4} width="480" height="200" className="mt-1 hover:scale-110" />

                <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                    <p className="text-white text-2xl font-bold">Delicious Pizza
                    <br></br><p className="text-white text-sm">Sale off 50% only this week</p>
                    </p>
                                                        
                </div>

                <button className="bg-yellow-900 hover:bg-black absolute bottom-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white py-2 px-4 rounded-md shadow-md">
                   Order Now
                </button>
            </div>
  </div>
</div>

</div>

    </>

   )
}
export default EightPage