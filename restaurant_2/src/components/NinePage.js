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
import  blog_1 from '../images/blog-1.jpg';
import  blog_2 from '../images/blog-2.jpg';
import  blog_3 from '../images/blog-3.jpg';
import  avatar_2 from '../images/avatar-2.jpg';
import  avatar_3 from '../images/avatar-3.jpg';
import star from '../images/star.png'
import calender from '../images/calendar.png'
import user from '../images/user.png'
import shape_gray from '../images/shape-grey.png'
const NinePage=()=>{

    return(
   <div>

   <div className="p-20 bg-gray-300 mb-10 ">
                      
                      <div>
                      <div>
                          <div className="text-red-500 font-bold">
                          Latest Blog Posts
                          </div>
                          <div className="text-3xl font-bold mt-2">
                              This Is All About <span className="text-orange-600">Foods</span>
                          </div>
                          <div className="text-gray-800 mt-2">
                          Food is any substance consumed to provide nutritional <br></br>support for an organism.
                          </div>
                          </div>
          
                          <div className="flex flex-wrap justify-center items-center bg-gray-300 mt-2">
          
                          <div className="flex flex-wrap mt-10">
                          <Card className="max-w-[24rem] overflow-hidden mx-4 ">
          
          
                  <CardHeader
                  floated={false}
                  shadow={false}
                  color="transparent"
                  className="m-0 rounded-none"
                  >
          
          
                  <div className="flex flex-cols">
                      <div>
                      <img className=" "
                          src={blog_1} width=""
                          alt="ui/ux review check"
                          
                      />
                      </div >
                      
          
                      
                  </div>
          
          
                  </CardHeader>
          
          
                  <CardBody>
          
                  <div className="flex flex-cols justify-start items-center mx-0">
          
                  <div>
                  <img src={calender} width="30" className="mx-2">
                  </img>
                  </div>
          
                  <div className="text-sm  hover:text-orange-600 mx-2" >
                  JAN 01 2022
                  </div>
          
          
          
          
                  <div>
                  <img src={user} width="30" className="mx-2">
                  </img>
                  </div>
          
                  <div className="text-sm hover:text-orange-600" >
                  JONATHAN SMITH
                  </div>
          
                  </div>
          
          
                  <Typography className="text-black font-bold text-2xl mt-4">
                  What Do You Think About <br></br> Cheese Pizza Recipes?
                  </Typography>
          
                  <Typography className="text-gray-700 font-normal mt-4 ">
                  Financial experts support or help you to to <br></br> 
                  find out which way you can raise your funds <br></br>more...
                  </Typography>
          
          
                  </CardBody>
          
          
                  <CardFooter className="flex items-center justify-between">
                      <div className="font-bold text-black hover:text-orange-600">
                          Read More
                      </div>
                  </CardFooter> 
          
          
          
                          </Card>
          
                          </div>
          
                          <div className="flex flex-wrap mt-10">
                          <Card className="max-w-[24rem] overflow-hidden mx-4 ">
          
          
                  <CardHeader
                  floated={false}
                  shadow={false}
                  color="transparent"
                  className="m-0 rounded-none"
                  >
          
          
                  <div className="flex flex-cols">
                      <div>
                      <img className=" "
                          src={blog_2} width=""
                          alt="ui/ux review check"
                          
                      />
                      </div >
                      
          
                      
                  </div>
          
          
                  </CardHeader>
          
          
                  <CardBody>
          
                  <div className="flex flex-cols justify-start items-center mx-0">
          
                  <div>
                  <img src={calender} width="30" className="mx-2">
                  </img>
                  </div>
          
                  <div className="text-sm  hover:text-orange-600 mx-2" >
                  JAN 01 2022
                  </div>
          
          
          
          
                  <div>
                  <img src={user} width="30" className="mx-2">
                  </img>
                  </div>
          
                  <div className="text-sm hover:text-orange-600" >
                  JONATHAN SMITH
                  </div>
          
                  </div>
          
          
                  <Typography className="text-black font-bold text-2xl mt-4">
                  What Do You Think About <br></br> Cheese Pizza Recipes?
                  </Typography>
          
                  <Typography className="text-gray-700 font-normal mt-4 ">
                  Financial experts support or help you to to <br></br> 
                  find out which way you can raise your funds <br></br>more...
                  </Typography>
          
          
                  </CardBody>
          
          
                  <CardFooter className="flex items-center justify-between">
                      <div className="font-bold text-black hover:text-orange-600">
                          Read More
                      </div>
                  </CardFooter> 
          
          
          
                          </Card>
          
                          </div>
          
          
                          <div className="flex flex-wrap mt-10">
          
                          <Card className="max-w-[24rem] overflow-hidden mx-4 ">
          
          
                  <CardHeader
                  floated={false}
                  shadow={false}
                  color="transparent"
                  className="m-0 rounded-none"
                  >
          
          
                  <div className="flex flex-cols">
                      <div>
                      <img className=" "
                          src={blog_3} width=""
                          alt="ui/ux review check"
                          
                      />
                      </div >
                      
          
                      
                  </div>
          
          
                  </CardHeader>
          
          
                  <CardBody>
          
                  <div className="flex flex-cols justify-start items-center mx-0">
          
                  <div>
                  <img src={calender} width="30" className="mx-2">
                  </img>
                  </div>
          
                  <div className="text-sm  hover:text-orange-600 mx-2" >
                  JAN 01 2022
                  </div>
          
          
          
          
                  <div>
                  <img src={user} width="30" className="mx-2">
                  </img>
                  </div>
          
                  <div className="text-sm hover:text-orange-600" >
                  JONATHAN SMITH
                  </div>
          
                  </div>
          
          
                  <Typography className="text-black font-bold text-2xl mt-4">
                  What Do You Think About <br></br> Cheese Pizza Recipes?
                  </Typography>
          
                  <Typography className="text-gray-700 font-normal mt-4 ">
                  Financial experts support or help you to to <br></br> 
                  find out which way you can raise your funds <br></br>more...
                  </Typography>
          
          
                  </CardBody>
          
          
                  <CardFooter className="flex items-center justify-between">
                      <div className="font-bold text-black hover:text-orange-600">
                          Read More
                      </div>
                  </CardFooter> 
                  </Card>
          
                          </div>
                          
                          </div>
                      </div>
          
    </div>

    {/* <div className="flex flex-row justify-between ">
    <img src={shape_gray} width="" height="" >
    </img>
    <img src={shape_gray} width="" height="" className="hidden md:flex">
    </img>
  </div> */}
   </div>
    )


}
export default NinePage