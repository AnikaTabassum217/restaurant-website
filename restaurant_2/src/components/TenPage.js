import React from "react";
import footer_illustration from '../images/footer-illustration.png' 
import facebook from '../images/facebook.png'
import twitter from '../images/twitter.png'
import instragram from '../images/instagram.png'
import letter from '../images/letter-p.png'
import { Select, Option } from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
  } from "@material-tailwind/react";

const TenPage=()=>{
    return (
        <div>
           <div className="relative bg-cover bg-center h-screen  mx-auto" 
                   style={{
                    backgroundImage: `url(${footer_illustration})`, height: "50vh"
         }}>
{/* 
             <div className="flex flex-cols justify-start items-start p-60">
             <div class="flex">
                    <div class="w-1/4 bg-gray-200 p-4 mx-32">
                        <div>
                        Foodie <span className="text-orange-600">.</span>
                        </div>
                        <div className="text-gray-600">
                        Financial experts support or help you to to <br></br>
                        find out which way you can raise your <br></br> funds more.
                        </div>
                    </div>
                    <div class="w-1/4 bg-gray-300 p-4 mx-20">
                        Column 2
                    </div>
                    <div class="w-1/4 bg-gray-400 p-4 mx-20">
                        Column 3
                    </div>
                    <div class="w-1/4 bg-gray-500 p-4 mx-20">
                        Column 4
                    </div>
                    </div>

             </div> */}


<div className=" hidden md:flex absolute top-0 left-0 w-1/4 h-full flex justify-center items-center">
    {/* <p className="text-black text-5xl font-bold">
    Foodie<span className="text-orange-600">.</span>

    <p className="text-gray-800 text-sm">Financial experts support or help you to to <br></br>
        find out which way you can raise your <br></br>funds more.</p>
    </p><br></br>


    <img src={facebook} width="30" className="mt-32 mr-2">
        </img> */}

    <div>
    <p className="text-black text-5xl font-bold">
    Foodie<span className="text-orange-600">.</span>

    <p className="text-gray-800 text-sm">Financial experts support or help you to to <br></br>
        find out which way you can raise your <br></br>funds more.</p>
    </p><br></br>


    <div className="flex flex-wrap mx-14">
    <img src={facebook} width="30" className="mt-0 mr-2">
        </img>

        

        <img src={twitter} width="30" className="mt-0 mr-2">
        </img>

        <img src={instragram} width="30" className="mt-0 mr-2">
        </img>

        <img src={letter} width="30" className="mt-0 mr-2">
        </img>

    </div>
    </div>


  </div>

<div className="absolute top-0 left-1/4 w-1/4 h-full flex justify-center items-center">
      <p className="text-black text-xl font-bold ">
      Contact Info<br></br>
      <p className="text-gray-800 mt-4">
      +1 (062) 109-9222
      </p>
      <p className="text-gray-800 mt-4">
      Info@YourGmail24.com
      </p>
      <p className="text-gray-800 mt-4">
      153 Williamson Plaza,<br></br> Maggieberg, MT 09514
      </p>
      </p>
</div>

<div className=" hidden md:flex absolute top-0 left-2/4 w-1/4 h-full flex justify-center items-center">
  <p className="text-black text-xl font-bold">
  Opening Hours<br></br>
      <p className="text-gray-800 mt-4">
      Monday-Friday: 08:00-22:00
      </p>
      <p className="text-gray-800 mt-4">
      Tuesday 4PM: Till Mid Night
      </p>
      <p className="text-gray-800 mt-4">
      Saturday: 10:00-16:00
      </p>
      </p>
</div>
  <div className="hidden md:flex absolute top-0 left-3/4 w-1/4 h-full flex justify-center items-center">
    {/* <h1 className="text-black text-5xl font-bold"></h1> */}
    <Card className="w-96">
      {/* <CardHeader
        variant="gradient"
        color="blue"
        className="mb-4 grid h-28 place-items-center"
      >
        <Typography variant="h3" color="white">
          Sign In
        </Typography>
      </CardHeader> */}
      <CardBody className="flex flex-wrap gap-4">
        <Input label="Name" size="sm" />
        <Input label="Eamil" size="lg" />
        <Select label="Select Person">
        <Option>Person</Option>
        <Option>2 Person</Option>
        <Option>3 Person</Option>
        <Option>4 Person</Option>
        <Option>5 Person</Option>
      </Select>
      <div className="w-96">
      <Textarea label="Message" />
    </div>
        {/* <Input label="Eamil" size="lg" /> */}
       

        <div className="-ml-2.5">
          {/* <Checkbox label="Remember Me" /> */}
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Button className="bg-yellow-800 hover:bg-black  ">
         Book A Table
        </Button>
        <Typography variant="small" className="mt-6 flex justify-center">
          {/* Don't have an account? */}
          <Typography
            as="a"
            href="#signup"
            variant="small"
            color="blue"
            className="ml-1 font-bold"
          >
            {/* Sign up */}
          </Typography>
        </Typography>
      </CardFooter>
    </Card>
  </div>

               
           </div>
        </div>
    )
}

export default TenPage