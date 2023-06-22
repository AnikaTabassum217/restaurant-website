import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
    Button,
  } from "@material-tailwind/react";
  // import { Button } from "@material-tailwind/react";
  import promo_1 from '../images/beef-burger.png'
  import promo_2 from '../images/sandwich.png'
  import promo_3 from '../images/sawarma.png'
  import promo_4 from '../images/croissant.png'
  import promo_5 from '../images/cinnamon-roll.png'
  import promo_7 from '../images/choco-glaze-donut-peanut.png'
  import promo_6 from '../images/choco-glaze-donut.png'
  import promo_8 from '../images/red-glaze-donut.png'
  import promo_9 from '../images/coffee-latte.png'
  import promo_10 from '../images/ice-chocolate.png'
  import promo_11 from '../images/ice-tea.png'
  import promo_12 from '../images/matcha-latte.png'


 const Body=()=> {
    return (
    <div class="flex flex-wrap p-16 mx-0">

      {/* <div class="flex-23 ">      
      <div class="bg-gray-200 -mt-8 px-4 ">
        <Card className="max-w-[12rem] overflow-hidden mx-6 h-[14rem]">
        <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none"
        >
            <img
            className="mx-1"
            src={promo_1}
            width="250"
            alt="ui/ux review check"
            />
        </CardHeader>
        <CardFooter className="flex items-center justify-between">
            <div className="flex items-center justify-between">
            <div className="mr-28">
                hhhh
            </div>
            <div>
                hhhh
            </div>
            </div>
        </CardFooter>
        </Card>
      </div>
      </div> */}

      {/* <div class="flex-23 ">      
      <div class="bg-gray-200 -mt-8 px-0 mx-2 ">
        <Card className="max-w-[12rem] overflow-hidden mx-6 h-[14rem]">
        <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none"
        >
            <img
            className="mx-1"
            src={promo_2}
            width="250"
            alt="ui/ux review check"
            />
        </CardHeader>
        <CardFooter className="flex items-center justify-between">
            <div className="flex items-center justify-between">
            <div className="mr-28">
                hhhh
            </div>
            <div>
                hhhh
            </div>
            </div>
        </CardFooter>
        </Card>
      </div>
      </div> */}

      {/* <div class="flex-23 ">      
      <div class="bg-gray-200 -mt-8 px-0 ">
        <Card className="max-w-[12rem] overflow-hidden mx-6 h-[14rem]">
        <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none"
        >
            <img
            className="mx-1"
            src={promo_3}
            width="250"
            alt="ui/ux review check"
            />
        </CardHeader>
        <CardFooter className="flex items-center justify-between">
            <div className="flex items-center justify-between">
            <div className="mr-28">
                hhhh
            </div>
            <div>
                hhhh
            </div>
            </div>
        </CardFooter>
        </Card>
      </div>
      </div>


      <div class="flex-23 ">      
      <div class="bg-gray-200 -mt-8 px-0 ">
        <Card className="max-w-[12rem] overflow-hidden mx-6 h-[14rem]">
        <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none"
        >
            <img
            className="mx-1"
            src={promo_4}
            width="250"
            alt="ui/ux review check"
            />
        </CardHeader>
        <CardFooter className="flex items-center justify-between">
            <div className="flex items-center justify-between">
            <div className="mr-28">
                hhhh
            </div>
            <div>
                hhhh
            </div>
            </div>
        </CardFooter>
        </Card>
      </div>
      </div> */}

      <div  className="max-h-[400px] overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
      <div >
        <div class="flex flex-wrap p-16 -mx-4 ">

        <div class="flex-23">      
          <div class="bg-gray-200 -mt-24 px-0 mx-2">
            <Card className="max-w-[12rem] overflow-hidden h-[14rem]">
              
              <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 rounded-none"
                >
                    <img
                    className="mx-1"
                    src={promo_1}
                    width="250"
                    alt="ui/ux review check"
                    />
                </CardHeader>
                <CardFooter className="flex items-center justify-between">
                    <div className="flex items-center justify-between">
                    <div className="mr-2">
                       Burger
                    </div>
                    <div>
                        Rp.45.000
                    </div>
                    </div>
                </CardFooter>
            </Card>
          </div>
        </div>

        <div class="flex-23">      
          <div class="bg-gray-200 -mt-24 px-0 mx-2">
            <Card className="max-w-[12rem] overflow-hidden h-[14rem]">
            <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 rounded-none"
                >
                    <img
                    className="mx-1"
                    src={promo_2}
                    width="250"
                    alt="ui/ux review check"
                    />
                </CardHeader>
                <CardFooter className="flex items-center justify-between">
                    <div className="flex items-center justify-between">
                    <div className="mr-4">
                        Sandwich
                    </div>
                    <div>
                        Rp.32.000
                    </div>
                    </div>
                </CardFooter>
            </Card>
          </div>
        </div>  

        <div class="flex-23">      
          <div class="bg-gray-200 -mt-24 px-0 mx-2">
            <Card className="max-w-[12rem] overflow-hidden h-[14rem]">
              
              <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 rounded-none"
                >
                    <img
                    className="mx-1"
                    src={promo_3}
                    width="250"
                    alt="ui/ux review check"
                    />
                </CardHeader>
                <CardFooter className="flex items-center justify-between">
                    <div className="flex items-center justify-between">
                    <div className="mr-4">
                        Sawarma
                    </div>
                    <div>
                        Rp.30.000
                    </div>
                    </div>
                </CardFooter>
            </Card>
          </div>
        </div>

        <div class="flex-23">      
          <div class="bg-gray-200 -mt-24 px-0 mx-2">
            <Card className="max-w-[12rem] overflow-hidden h-[14rem]">
            <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 rounded-none"
                >
                    <img
                    className="mx-1"
                    src={promo_4}
                    width="250"
                    alt="ui/ux review check"
                    />
                </CardHeader>
                <CardFooter className="flex items-center justify-between">
                    <div className="flex items-center justify-between">
                    <div className="mr-4">
                        Croissant
                    </div>
                    <div>
                        Rp.30.000
                    </div>
                    </div>
                </CardFooter>
            </Card>
          </div>
        </div>

        {/* Add more cards here */}

        </div>

        <div class="flex flex-wrap p-16 -mx-4">

        <div class="flex-23">      
          <div class="bg-gray-200 -mt-24 px-0 mx-2">
            <Card className="max-w-[12rem] overflow-hidden h-[14rem]">
              
              <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 rounded-none"
                >
                    <img
                    className="mx-1"
                    src={promo_5}
                    width="250"
                    alt="ui/ux review check"
                    />
                </CardHeader>
                <CardFooter className="flex items-center justify-between">
                    <div className="flex items-center justify-between">
                    <div className="mr-2">
                        Cinnamon..
                    </div>
                    <div>
                        Rp.20.000
                    </div>
                    </div>
                </CardFooter>
            </Card>
          </div>
        </div>

        <div class="flex-23">      
          <div class="bg-gray-200 -mt-24 px-0 mx-2">
            <Card className="max-w-[12rem] overflow-hidden h-[14rem]">
            <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 rounded-none"
                >
                    <img
                    className="mx-1"
                    src={promo_7}
                    width="250"
                    alt="ui/ux review check"
                    />
                </CardHeader>
                <CardFooter className="flex items-center justify-between">
                    <div className="flex items-center justify-between">
                    <div className="mr-6">
                        Choco...
                    </div>
                    <div>
                        Rp.10.000
                    </div>
                    </div>
                </CardFooter>
            </Card>
          </div>
        </div>  

        <div class="flex-23">      
          <div class="bg-gray-200 -mt-24 px-0 mx-2">
            <Card className="max-w-[12rem] overflow-hidden h-[14rem]">
              
              <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 rounded-none"
                >
                    <img
                    className="mx-1"
                    src={promo_6}
                    width="250"
                    alt="ui/ux review check"
                    />
                </CardHeader>
                <CardFooter className="flex items-center justify-between">
                    <div className="flex items-center justify-between">
                    <div className="mr-6">
                        Choco..
                    </div>
                    <div>
                        Rp.10.000
                    </div>
                    </div>
                </CardFooter>
            </Card>
          </div>
        </div>

        <div class="flex-23">      
          <div class="bg-gray-200 -mt-24 px-0 mx-2">
            <Card className="max-w-[12rem] overflow-hidden h-[14rem]">
            <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 rounded-none"
                >
                    <img
                    className="mx-1"
                    src={promo_8}
                    width="250"
                    alt="ui/ux review check"
                    />
                </CardHeader>
                <CardFooter className="flex items-center justify-between">
                    <div className="flex items-center justify-between">
                    <div className="mr-4">
                        Red Ga..
                    </div>
                    <div>
                        Rp.10.000
                    </div>
                    </div>
                </CardFooter>
            </Card>
          </div>
        </div>

       

        </div>

        <div class="flex flex-wrap p-16 -mx-4">

        <div class="flex-23">      
          <div class="bg-gray-200 -mt-24 px-0 mx-2">
            <Card className="max-w-[12rem] overflow-hidden h-[14rem]">
              
              <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 rounded-none"
                >
                    <img
                    className="mx-1"
                    src={promo_9}
                    width="250"
                    alt="ui/ux review check"
                    />
                </CardHeader>
                <CardFooter className="flex items-center justify-between">
                    <div className="flex items-center justify-between">
                    <div className="mr-2">
                        Iced Co...
                    </div>
                    <div>
                        Rp.25.000
                    </div>
                    </div>
                </CardFooter>
            </Card>
          </div>
        </div>

        <div class="flex-23">      
          <div class="bg-gray-200 -mt-24 px-0 mx-2">
            <Card className="max-w-[12rem] overflow-hidden h-[14rem]">
            <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 rounded-none"
                >
                    <img
                    className="mx-1"
                    src={promo_10}
                    width="250"
                    alt="ui/ux review check"
                    />
                </CardHeader>
                <CardFooter className="flex items-center justify-between">
                    <div className="flex items-center justify-between">
                    <div className="mr-2">
                        Iced Ch..
                    </div>
                    <div>
                        Rp.20.000
                    </div>
                    </div>
                </CardFooter>
            </Card>
          </div>
        </div>  

        <div class="flex-23">      
          <div class="bg-gray-200 -mt-24 px-0 mx-2">
            <Card className="max-w-[12rem] overflow-hidden h-[14rem]">
              
              <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 rounded-none"
                >
                    <img
                    className="mx-1"
                    src={promo_11}
                    width="250"
                    alt="ui/ux review check"
                    />
                </CardHeader>
                <CardFooter className="flex items-center justify-between">
                    <div className="flex items-center justify-between">
                    <div className="mr-4">
                        Iced Tea
                    </div>
                    <div>
                        Rp.15.000
                    </div>
                    </div>
                </CardFooter>
            </Card>
          </div>
        </div>

        <div class="flex-23">      
          <div class="bg-gray-200 -mt-24 px-0 mx-2">
            <Card className="max-w-[12rem] overflow-hidden h-[14rem]">
            <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 rounded-none"
                >
                    <img
                    className="mx-1"
                    src={promo_12}
                    width="250"
                    alt="ui/ux review check"
                    />
                </CardHeader>
                <CardFooter className="flex items-center justify-between">
                    <div className="flex items-center justify-between">
                    <div className="mr-2">
                        Iced Ma..
                    </div>
                    <div>
                        Rp.22.000
                    </div>
                    </div>
                </CardFooter>
            </Card>
          </div>
        </div>

        

        </div>
    </div>
      </div>

    

    <div>
    <Card className="fixed top-4 right-4 h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-white">
        <div className="mb-2 p-4">
          <Typography variant="h5" color="white" className="white">
            {/* Sidebar */}
          </Typography>
        </div>

        <div>
          <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-16 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
          </div>
          <div>
            Cart Empty
          </div>
        </div>

           <div className="flex items-center justify-between mt-40 ">
              <div className=" ">
                  TOTAL
              </div>
              <div>
                Rp.0
              </div>
            </div>

                <div className="">
                <div className="flex items-center justify-between mt-4 bg-gray-200 ">
              
              <div className=" ">
                  CASH
              </div>

           
              <div className="flex items-center justify-between " >
                <div className="pl-12">
                Rp.0
                </div>
                <div>
                <input
                  type="text"
                  className=" rounded  w-1/2 h-8  pr-0  focus:outline-none mt-2"
                  placeholder=""
                  
                />
                </div>
              </div>
        
              
            </div >  

              <div className="flex items-center justify-between bg-gray-200 ">

              <input
                  type="text"
                  className=" rounded  w-1/3 h-8  pr-0  focus:outline-none mt-2 mr-2 ml-2"
                  placeholder=""
                  
                />

               <input
                  type="text"
                  className=" rounded  w-1/3 h-8  pr-0  focus:outline-none mt-2 mr-2"
                  placeholder=""
                  
                />

                <input
                  type="text"
                  className=" rounded  w-1/3 h-8  pr-0  focus:outline-none mt-2 mr-2"
                  placeholder=""
                  
                />
              </div>
              
              <div className="flex items-center justify-between bg-gray-200 ">

                    <input
                        type="text"
                        className=" rounded  w-1/3 h-8  pr-0  focus:outline-none mt-2 mr-2 ml-2"
                        placeholder=""
                        
                      />

                    <input
                        type="text"
                        className=" rounded  w-1/3 h-8  pr-0  focus:outline-none mt-2 mr-2"
                        placeholder=""
                        
                      />

                    <input
                      type="text"
                      className=" rounded  w-1/3 h-8  pr-0  focus:outline-none mt-2 mr-2"
                      placeholder=""
                      
                    />
               </div>
                </div>

                <div className="flex items-center justify-between  bg-green-200">
                    <div className=" text-cyan-800 ">
                      change
                    </div>
                    <div>
                    Rp. 6000
                    </div>
                </div>
                        
                  <div className="bg-blue-300">Submit</div>
                       
      </Card>
     
    </div>

    </div>
    
    );
  }

  export default Body