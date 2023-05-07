import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
  } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import promo_1 from '../images/promo-1.png'
import food_menu_1 from '../images/food-menu-1.png'
import food_menu_2 from '../images/food-menu-2.png'
import food_menu_3 from '../images/food-menu-3.png'
import food_menu_4 from '../images/food-menu-4.png'
import food_menu_5 from '../images/food-menu-5.png'
import food_menu_6 from '../images/food-menu-6.png'
import star from '../images/star.png'

const FourPage=()=>{
return(
    <div className="bg-gray-300  ">
        <div className="mt-40 bg-gray-300">
           <div className="text-red-700 font-bold">
           Popular Dishes
           </div>
           <div className="text-3xl font-bold mt-2">
           Our Delicious <span className="text-orange-600">Foods</span> 
           </div>
           <div className="text-gray-900 mt-2">
           Food is any substance consumed to provide nutritional <br></br> support for an organism.
           </div>

           {/* <div className="flex flex-wrap justify-center items-center mt-6">

           <Button className="bg-yellow-800 mx-4">All</Button>
           <Button className="text-black bg-white mx-4">Pizza</Button>
           <Button className="text-black bg-white mx-4">Burger</Button>
           <Button className="text-black bg-white  mx-4">Drinks</Button>
           <Button className="text-black bg-white  mx-4">Sandwich</Button>
           </div> */}
           

        </div>

        <div className="flex flex-wrap justify-center items-center bg-gray-300 mt-10">

      <div className="flex flex-wrap mt-10">
      <Card className="max-w-[24rem] overflow-hidden mx-4 ">

  <CardFooter className="flex items-center justify-between">

  <div>
  <span class="border border-red-500 bg-red-500 text-white px-2">-15%</span>
  </div>
  </CardFooter> 

  <CardHeader
    floated={false}
    shadow={false}
    color="transparent"
    className="m-0 rounded-none"
  >
    <img className="mx-10"
      src={food_menu_1}
      alt="ui/ux review check"
    />
  </CardHeader>

  <CardBody>
    <Typography className="text-black font-bold">
    <div className="flex flex-cols  justify-center items-center">
        <div className="text-gray-700">Chicken</div>
        <div className="flex flex-cols">
            <img src={star} width="17" height="17" className="mx-2"></img>
            <img src={star} width="17" height="17" className="mx-2"></img>
            <img src={star} width="17" height="17" className="mx-2"></img>
            <img src={star} width="17" height="17" className="mx-2"></img>
            <img src={star} width="17" height="17" className="mx-2"></img>
        </div>

    </div>
    </Typography>
    <Typography variant="lead" color="black" className="mt-3 font-bold">
    Fried Chicken Unlimited
    </Typography>

    <Typography variant="lead" color="black" className="mt-3 font-bold">
    <div>
        <span className="text-red-900">PRICE:</span><span className="text-orange-600">$49.00</span>
        <span></span>
    </div>
    </Typography>

  </CardBody>



        </Card>
      </div>

      <div className="flex flex-wrap mt-10">
      <Card className="max-w-[24rem] overflow-hidden mx-4 ">

<CardFooter className="flex items-center justify-between">

<div>
<span class="border border-red-500 bg-red-500 text-white px-2">-10%</span>
</div>
</CardFooter> 

<CardHeader
  floated={false}
  shadow={false}
  color="transparent"
  className="m-0 rounded-none"
>
  <img className="mx-10"
    src={food_menu_2}
    alt="ui/ux review check"
  />
</CardHeader>

<CardBody>
  <Typography className="text-black font-bold">
   <div className="flex flex-cols  justify-center items-center">
       <div className="text-gray-700">Noddles</div>
       <div className="flex flex-cols">
           <img src={star} width="17" height="17" className="mx-2"></img>
           <img src={star} width="17" height="17" className="mx-2"></img>
           <img src={star} width="17" height="17" className="mx-2"></img>
           <img src={star} width="17" height="17" className="mx-2"></img>
           <img src={star} width="17" height="17" className="mx-2"></img>
       </div>

   </div>
  </Typography>
  <Typography variant="lead" color="black" className="mt-3 font-bold">
  Burger King Whopper
  </Typography>

  <Typography variant="lead" color="black" className="mt-3 font-bold">
  <div>
      <span className="text-red-900">PRICE:</span><span className="text-orange-600">$29.00</span>
      <span></span>
  </div>
  </Typography>

</CardBody>



       </Card>
      </div>

      <div className="flex flex-wrap mt-10">
      <Card className="max-w-[24rem] overflow-hidden mx-4 ">

<CardFooter className="flex items-center justify-between">

<div>
<span class="border border-red-500 bg-red-500 text-white px-2">-15%</span>
</div>
</CardFooter> 

<CardHeader
  floated={false}
  shadow={false}
  color="transparent"
  className="m-0 rounded-none"
>
  <img className="mx-10"
    src={food_menu_3}
    alt="ui/ux review check"
  />
</CardHeader>

<CardBody>
  <Typography className="text-black font-bold">
   <div className="flex flex-cols  justify-center items-center">
       <div className="text-gray-700">Pizzas

</div>
       <div className="flex flex-cols">
           <img src={star} width="17" height="17" className="mx-2"></img>
           <img src={star} width="17" height="17" className="mx-2"></img>
           <img src={star} width="17" height="17" className="mx-2"></img>
           <img src={star} width="17" height="17" className="mx-2"></img>
           <img src={star} width="17" height="17" className="mx-2"></img>
       </div>

   </div>
  </Typography>
  <Typography variant="lead" color="black" className="mt-3 font-bold">
  White Castle Pizzas
  </Typography>

  <Typography variant="lead" color="black" className="mt-3 font-bold">
  <div>
      <span className="text-red-900">PRICE:</span><span className="text-orange-600">$49.00</span>
      <span></span>
  </div>
  </Typography>

</CardBody>



       </Card>
      </div>

      

        </div>

        <div className="flex flex-wrap justify-center items-center bg-gray-300 mt-10">

         <div className="flex flex-wrap mt-10">
         <Card className="max-w-[24rem] overflow-hidden mx-4 ">

<CardFooter className="flex items-center justify-between">

<div>
<span class="border border-red-500 bg-red-500 text-white px-2">-20%</span>
</div>
</CardFooter> 

<CardHeader
  floated={false}
  shadow={false}
  color="transparent"
  className="m-0 rounded-none"
>
  <img className="mx-10"
    src={food_menu_4}
    alt="ui/ux review check"
  />
</CardHeader>

<CardBody>
  <Typography className="text-black font-bold">
   <div className="flex flex-cols  justify-center items-center">
       <div className="text-gray-700">Burrito</div>
       <div className="flex flex-cols">
           <img src={star} width="17" height="17" className="mx-2"></img>
           <img src={star} width="17" height="17" className="mx-2"></img>
           <img src={star} width="17" height="17" className="mx-2"></img>
           <img src={star} width="17" height="17" className="mx-2"></img>
           <img src={star} width="17" height="17" className="mx-2"></img>
       </div>

   </div>
  </Typography>
  <Typography variant="lead" color="black" className="mt-3 font-bold">
  Bell Burrito Supreme
  </Typography>

  <Typography variant="lead" color="black" className="mt-3 font-bold">
  <div>
      <span className="text-red-900">PRICE:</span><span className="text-orange-600">$59.00</span>
      <span></span>
  </div>
  </Typography>

</CardBody>



       </Card>
         </div>

          <div className="flex flex-wrap mt-10">
          <Card className="max-w-[24rem] overflow-hidden mx-4 ">

    <CardFooter className="flex items-center justify-between">

    <div>
    <span class="border border-red-500 bg-red-500 text-white px-2">-5%</span>
    </div>
    </CardFooter> 

    <CardHeader
      floated={false}
      shadow={false}
      color="transparent"
      className="m-0 rounded-none"
    >
      <img className="mx-10"
        src={food_menu_5}
        alt="ui/ux review check"
      />
    </CardHeader>

    <CardBody>
      <Typography className="text-black font-bold">
      <div className="flex flex-cols  justify-center items-center">
          <div className="text-gray-700">Nuggets

    </div>
          <div className="flex flex-cols">
              <img src={star} width="17" height="17" className="mx-2"></img>
              <img src={star} width="17" height="17" className="mx-2"></img>
              <img src={star} width="17" height="17" className="mx-2"></img>
              <img src={star} width="17" height="17" className="mx-2"></img>
              <img src={star} width="17" height="17" className="mx-2"></img>
          </div>

      </div>
      </Typography>
      <Typography variant="lead" color="black" className="mt-3 font-bold">
      Kung Pao Chicken BBQ
      </Typography>

      <Typography variant="lead" color="black" className="mt-3 font-bold">
      <div>
          <span className="text-red-900">PRICE:</span><span className="text-orange-600">$49.00</span>
          <span></span>
      </div>
      </Typography>

    </CardBody>



          </Card>
          </div>


          <div className="flex flex-wrao mt-10">

          <Card className="max-w-[24rem] overflow-hidden mx-4 ">

<CardFooter className="flex items-center justify-between">

<div>
<span class="border border-red-500 bg-red-500 text-white px-2">-15%</span>
</div>
</CardFooter> 

<CardHeader
  floated={false}
  shadow={false}
  color="transparent"
  className="m-0 rounded-none"
>
  <img className="mx-10"
    src={food_menu_6}
    alt="ui/ux review check"
  />
</CardHeader>

<CardBody>
  <Typography className="text-black font-bold">
   <div className="flex flex-cols  justify-center items-center">
       <div className="text-gray-700">Chicken</div>
       <div className="flex flex-cols">
           <img src={star} width="17" height="17" className="mx-2"></img>
           <img src={star} width="17" height="17" className="mx-2"></img>
           <img src={star} width="17" height="17" className="mx-2"></img>
           <img src={star} width="17" height="17" className="mx-2"></img>
           <img src={star} width="17" height="17" className="mx-2"></img>
       </div>

   </div>
  </Typography>
  <Typography variant="lead" color="black" className="mt-3 font-bold">
  Wendy's Chicken
  </Typography>

  <Typography variant="lead" color="black" className="mt-3 font-bold">
  <div>
      <span className="text-red-900">PRICE:</span><span className="text-orange-600">$49.00</span>
      <span></span>
  </div>
  </Typography>

</CardBody>

       </Card>

          </div>

        

        </div>

  
    </div>
)
}

export default FourPage