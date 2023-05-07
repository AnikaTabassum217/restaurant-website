import React  from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
  } from "@material-tailwind/react";
import  avatar_1 from '../images/avatar-1.jpg';
import  avatar_2 from '../images/avatar-2.jpg';
import  avatar_3 from '../images/avatar-3.jpg';
import star from '../images/star.png'

const SevenPage=()=>{
return(
    <div className="mt-80">
         <div className="bg-gray-300">
        <div className="mt-40 bg-gray-300">
           <div className="text-red-700 font-bold mt-20">
           Testimonials
           </div>
           <div className="text-3xl font-bold mt-2">
           Our Customers <span className="text-orange-600">Reviews</span> 
           </div>
           <div className="text-gray-900 mt-2">
           Food is any substance consumed to provide nutritional <br></br> support for an organism.
           </div>

           <div className="flex flex-cols justify-center items-center mt-6">

           
           </div>

        </div>

        <div className="flex flex-cols justify-center items-center bg-gray-300 mt-10">

      <Card className="max-w-[24rem] overflow-hidden mx-4 ">

<CardFooter className="flex items-center justify-between">

{/* <div>
<span class="border border-red-500 bg-red-500 text-white px-2">-15%</span>
</div> */}
</CardFooter> 

<CardHeader
  floated={false}
  shadow={false}
  color="transparent"
  className="m-0 rounded-none"
>
 

      <div className="flex flex-cols">
            <div>
            <img className="mx-10  rounded-full"
                src={avatar_1} width="80"
                alt="ui/ux review check"
                
            />
            </div >
            

            <div className="font-bold text-black">
            Thomas Josef <br></br><span className="text-gray-800">CEO Getforce</span>
            </div>
       </div>
</CardHeader>

<CardBody>
  
  <Typography variant="lead"  className="mt-3 font-normal text-gray-700">
  <div>
  "I would be lost without restaurant. I would like to personally thank you for your outstanding product."
  </div>
  </Typography>

  <Typography className="text-black font-bold">
   <div className="flex flex-cols  justify-center items-center">
      
       <div className="flex flex-cols">
           <img src={star} width="17" height="17" className="mx-2"></img>
           <img src={star} width="17" height="17" className="mx-2"></img>
           <img src={star} width="17" height="17" className="mx-2"></img>
           <img src={star} width="17" height="17" className="mx-2"></img>
           <img src={star} width="17" height="17" className="mx-2"></img>
       </div>

   </div>
  </Typography>

</CardBody>



       </Card>

       <Card className="max-w-[24rem] overflow-hidden mx-4 hidden md:flex">

<CardFooter className="flex items-center justify-between">

{/* <div>
<span class="border border-red-500 bg-red-500 text-white px-2">-15%</span>
</div> */}
</CardFooter> 

<CardHeader
  floated={false}
  shadow={false}
  color="transparent"
  className="m-0 rounded-none"
>
 

      <div className="flex flex-cols">
            <div>
            <img className="mx-10  rounded-full"
                src={avatar_2} width="80"
                alt="ui/ux review check"
                
            />
            </div >
            

            <div className="font-bold text-black">
            Charles Richard <br></br><span className="text-gray-800">CEO Angela</span>
            </div>
       </div>
</CardHeader>

<CardBody>
  
  <Typography variant="lead"  className="mt-3 font-normal text-gray-700">
  <div>
  "I would be lost without restaurant. I would like to personally thank you for your outstanding product."
  </div>
  </Typography>

  <Typography className="text-black font-bold">
   <div className="flex flex-cols  justify-center items-center">
      
       <div className="flex flex-cols">
           <img src={star} width="17" height="17" className="mx-2"></img>
           <img src={star} width="17" height="17" className="mx-2"></img>
           <img src={star} width="17" height="17" className="mx-2"></img>
           <img src={star} width="17" height="17" className="mx-2"></img>
           <img src={star} width="17" height="17" className="mx-2"></img>
       </div>

   </div>
  </Typography>

</CardBody>



       </Card>

       <Card className="max-w-[24rem] overflow-hidden mx-4 hidden md:flex">

<CardFooter className="flex items-center justify-between">

{/* <div>
<span class="border border-red-500 bg-red-500 text-white px-2">-15%</span>
</div> */}
</CardFooter> 

<CardHeader
  floated={false}
  shadow={false}
  color="transparent"
  className="m-0 rounded-none"
>
 

      <div className="flex flex-cols">
            <div>
            <img className="mx-10  rounded-full"
                src={avatar_3} width="80"
                alt="ui/ux review check"
                
            />
            </div >
            

            <div className="font-bold text-black">
            Robert William <br></br><span className="text-gray-800">CEO Kingfisher</span>
            </div>
       </div>
</CardHeader>

<CardBody>
  
  <Typography variant="lead" className="mt-3 font-normal text-gray-700">
  <div>
  "I would be lost without restaurant. I would like to personally thank you for your outstanding product."
  </div>
  </Typography>

  <Typography className="text-black font-bold">
   <div className="flex flex-cols  justify-center items-center">
      
       <div className="flex flex-cols">
           <img src={star} width="17" height="17" className="mx-2"></img>
           <img src={star} width="17" height="17" className="mx-2"></img>
           <img src={star} width="17" height="17" className="mx-2"></img>
           <img src={star} width="17" height="17" className="mx-2"></img>
           <img src={star} width="17" height="17" className="mx-2"></img>
       </div>

   </div>
  </Typography>
  </CardBody>

       </Card>
        </div>
      
    </div>
    </div>
)
}
export default SevenPage