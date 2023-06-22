// import card from '@material-tailwind/react/theme/components/card';
// import { Filter, TextInput } from 'react-admin';

// const SearchFilter = (props) => (


// <Filter {...props}>
//     <TextInput label="Search" source="name" alwaysOn />
//   </Filter>

// );

// export default SearchFilter;

// import {
//     Card,
//     CardHeader,
//     CardBody,
//     CardFooter,
//     Typography,
//     Input,
//     Checkbox,
//     Button,
//   } from "@material-tailwind/react";
//   import { Filter, TextInput } from 'react-admin';
//   export default function Example(props) {
//     return (
//       <Card className="w-96 ml-28">
       
//           <Typography variant="h3" color="white">
//                 <Filter {...props}>
//                     <TextInput label="Cari menu..." source="name" alwaysOn />
                   
//                 </Filter>
//           </Typography>
    
//       </Card>
//     );
//   }


// import React, { useState } from 'react';

// const SearchBar = () => {
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleInputChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   return (
//     <div className="flex px-2 flex-row relative">
//       <div className="absolute left-5 top-3 px-2 py-2 rounded-full bg-cyan-500 text-white">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-6 w-6"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//           ></path>
//         </svg>
//       </div>
//       <input
//         type="text"
//         className="bg-white rounded-3xl shadow text-lg w-full h-16 py-4 pl-16 transition-shadow focus:shadow-2xl focus:outline-none"
//         placeholder="Cari menu ..."
//         value={searchQuery}
//         onChange={handleInputChange}
//       />
//     </div>
//   );
// };

// export default SearchBar;


import React, { useState } from 'react';
import {
  Card,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { Filter, TextInput } from 'react-admin';

const SearchBar = (props) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Card className="w-96 ml-28">
      
        <div className="absolute left-5 top-3 px-2 py-2 rounded-full bg-cyan-500 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          className=" rounded-xl  w-full h-16  pl-16  focus:outline-none"
          placeholder="Cari menu ..."
          value={searchQuery}
          onChange={handleInputChange}
        />
    </Card>
  );
};

export default SearchBar;

