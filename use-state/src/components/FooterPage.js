import React from "react";
import { Typography } from "@material-tailwind/react";
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import instragram from '../images/instragram.png'
import youtube from '../images/youtube.png'
import linkedin from '../images/linkedin.png'
const FooterPage =()=>{
    return(
        <div>
            <div className="bg-gray-200 ">

            <div className=" grid grid-cols-4 gap-3 mt-8">
            <div className="mt-16 text-align: left">                
            <div className="text-align: left">CONTACT</div>

            <a href="https://www.bmw.com/en-au/fastlane/contact.html">
            <div className="mt-4 ml-2 text-gray-700 hover:text-black font-bold hidden md:block">
                Contact us
            </div>
            </a>

            <a href="https://www.bmw.com/en-au/fastlane/dealer-locator.html">
            <div className="mt-4 ml-6 text-gray-700 hover:text-black font-bold hidden md:block">Find a Dealer</div>
            </a>

            <a href="https://www.bmw.com/en-au/offers-and-services/financial-services.html#Contact_Us hidden md:block">
            <div className="mt-4 ml-32 text-gray-700 hover:text-black font-bold hidden md:block">Contact BMW Financial Services</div>
            </a>
            
            </div>
   
            <div className="mt-8">
            <div className="mt-8 text-align: left">                
            <div className="mr-4 " >QUICK LINKS</div>
           
            <a href="https://www.recall.bmw.com.au/">
            <div className="mt-4 ml-10 text-gray-700 hover:text-black font-bold hidden md:block">BMW Safty Recalls<span>&#x2197;</span> </div>
            </a>

            <a href="https://shop.bmw.com.au/#/stock-locator">
            <div className="mt-4 ml-6 text-gray-700 hover:text-black font-bold hidden md:block">New Car Locator<span>&#x2197;</span></div>
            </a>

            <a href="https://myfinance.bmw.com.au/fin/m/">
            <div className="mt-4 ml-8 text-gray-700 hover:text-black font-bold hidden md:block">Apply for Finance<span>&#x2197;</span></div>
            </a>

            <a href="https://www.bmw.com/en-au/offers-and-services/personal-services/bmw-service-booking.html">
            <div className="mt-4 ml-2 text-gray-700 hover:text-black font-bold hidden md:block">Book a Service</div>
            </a>
           
            </div>
            </div>

            <div className="mt-8">
            <div className="mt-8 text-align: left">                
            <div className="mr-4">EXPERIENCE BMW</div>
             
            <a href="https://www.bmwgroup.jobs/au/en.html">
            <div className="mt-4 mr-20 text-gray-700 hover:text-black font-bold hidden md:block">Careers <span>&#x2197;</span></div>
            </a>

            <a href="https://www.bmw.com/en-au/discover/electromobility/electric-cars.html">
            <div className="mt-4 mr-24 text-gray-700 hover:text-black font-bold hidden md:block">BMW i</div>
            </a>
            
            <a href="https://www.bmw.com/en-au/discover/x-range.html">
            <div className="mt-4 mr-10 text-gray-700 hover:text-black font-bold hidden md:block">BMW X Range</div>
            </a>
            
            <a href="https://www.bmw.com/en-au/discover/driving-experience.html">
            <div className="mt-4 ml-10 text-gray-700 hover:text-black font-bold hidden md:block">BMW Driving Experience</div>
            </a>
            
            <a href="https://www.bmw.com/en-au/offers-and-services/bmw-connected-drive/bmw-connected-drive.html">
            <div className="mt-4 ml-6 text-gray-700 hover:text-black font-bold hidden md:block">BMW Connected Drive</div>
            </a>
            
            </div>
            </div>

            <div className="mt-8">
            <div className="mt-8 text-align: left">                
            <div className="mr-44">LEGAL</div>

            <a href="https://www.bmw.com/en-au/offers-and-services/bmw-connected-drive/overview.html">
            <div className="mt-4 ml-10 text-gray-700 hover:text-black font-bold hidden md:block">Connected Drive Legal Information</div>
            </a>
            
            </div>
            </div>

            </div>
              {/* ICONS */}
              <div>
                  <div className="flex ml-44">

                  <a href="https://www.facebook.com/BMWAustralia/" target="_blank">
                  <img src={facebook}width="30" height="30" class="mr-2">                       
                  </img>
                  </a>

                  <a href="https://twitter.com/bmwau" target="_blank">
                  <img src={twitter}width="30" height="30" class="mr-2">                       
                  </img>
                  </a> 

                  <a href="https://www.instagram.com/bmwau/?hl=en" target="_blank">
                  <img src={instragram}width="30" height="30" class="mr-2">                       
                  </img>
                  </a>

                  <a href="https://www.youtube.com/channel/UC2fD3blIgfF1lLYGxA0K12A" target="_blank">
                  <img src={youtube}width="30" height="30" class="mr-2">                       
                  </img>
                  </a>
               
                  <a href="https://au.linkedin.com/showcase/bmw-group-australia" target="_blank">
                  <img src={linkedin}width="30" height="30" >                       
                  </img>
                  </a>  
                  </div>

              </div>

            </div>
           

           {/* FOOTER */}
            <div className="mr-8 ml-8">
            <footer className=" flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
      <Typography color="blue-gray" className="font-normal">
        &copy; BMW Group Australia 2023
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 ">
        <li>
          <Typography
            as="a"
            href="https://www.bmw.com/en-au/footer/privacy.html"
            color="blue-gray"
            className="font-bold transition-colors hover:text-blue-500 focus:text-blue-500 "
          >
           Privacy and Cookie Policy
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="https://www.bmw.com/en-au/footer/terms.html"
            color="blue-gray"
            className="font-bold transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Terms & Condition
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="https://www.bmw.com/en-au/footer/con-terms.html"
            color="blue-gray"
            className="font-bold transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Configuration Terms & Conditions
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="https://www.bmw.com/en-au/footer/whistleblower-policy.html"
            color="blue-gray"
            className="font-bold transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            WhistleBlower Policy
          </Typography>
        </li>
      </ul>
    </footer>
            </div>
          

        </div>
    )
}
 export default FooterPage;