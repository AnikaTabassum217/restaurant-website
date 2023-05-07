import React from "react";
import { FaBeer } from 'react-icons/fa';

const Navbar =()=>{

    return(
        <div className=" mx-auto flex justify-between items-left p-6
         bg-violet-800 text-white md:flex sm:flex">
            <div>
                    
             {/* <ul className="md:flex md:items-left ">
               <li className="px-20 font-bold text-2xl ">traackr</li>
                <li className="mx-20">
                    <a>Products</a>
                </li>
                <li className="px-5">Use className</li>
                <li className="px-5">Customers</li>
                <li className="px-5">Resources</li>
                <li className="px-5">Blog</li>
                <li className="px-5">About us</li>
                <li className="px-20">Login   |</li>
             </ul> */}

            <nav>
                <ul  className='flex flex-row p-4'>
                   <li className="px-20 font-bold text-2xl ">traackr</li>
                    <li className='text-xl px-4  flex'>
                    Products
                    </li>
                    <li className='text-xl px-4  flex'>
                    Use className
                    </li>
                    <li className='text-xl px-4 flex'>
                    Customers
                    </li>
                    <li className='text-xl px-4  flex'>
                    Resources
                    </li>
                    <li className='text-xl px-4  flex'>
                    About us
                    </li>
                    <li className='text-xl px-4  flex'>
                    Login   |
                    </li>

                    <li>
                    {/* <FaBeer  size={25} className='mr-5 '/> */}
                    <span  class="inline-block text-white font-bold rounded-full 
                     px-4 border-2 border-white">Talk to US</span>
                    </li>
                    
                </ul>
              </nav> 



                    
            </div>
        </div>
    )
}

export default Navbar;