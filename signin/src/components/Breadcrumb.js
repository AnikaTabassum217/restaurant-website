// import { Link } from 'react-router-dom';

// function Breadcrumb(props) {
//   return (
//     <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
//       <h2 className="text-title-md2 font-semibold text-black dark:text-white">
//         {props.pageName}
//       </h2>

//       <nav>
//         <ol className="flex items-center gap-2">
//           <li>
//             <Link to="/">Dashboard /</Link>
//           </li>
//           <li className="text-primary">{props.pageName}</li>
//         </ol>
//       </nav>
//     </div>
//   );
// }

// export default Breadcrumb;


import { Breadcrumbs } from "@material-tailwind/react";

export default function Example() {
    return (
        <Breadcrumbs className="text-sm text-gray-500">
        <a href="#" className="hover:underline">
          Docs
        </a>
        <a href="#" className="hover:underline">
          Components
        </a>
        <a href="#" className="font-medium">
          Breadcrumbs
        </a>
      </Breadcrumbs>
    );
  }