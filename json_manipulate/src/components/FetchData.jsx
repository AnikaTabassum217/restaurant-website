import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [data, setData] = useState([]);

    let stringData= JSON.stringify(data)
    console.log("Afetr stringify",stringData);
    let parseData=JSON.parse(stringData)
    console.log("Afetr parse",parseData)
    alert(stringData);

  const getData = () => {
    fetch("data.json", {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((myJson) => {
        console.log(myJson);
        setData(myJson);
      });
  };

  const handleFetchClick = () => {
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container">
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Capital</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.length > 0 &&
              data.map((val) => (
                <tr key={val.id}>
                  <td>{val.id}</td>
                  <td>{val.name}</td>
                  <td>{val.capital}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <button onClick={handleFetchClick}>Fetch</button>
    </>
  );
};

export default FetchData;






// import React,{useEffect, useState} from "react";

// const FetchData=()=>{

//     const [data,setData]=useState([])

//         const getData=()=>{
//             fetch('data.json',{header:{
//                 'Content-Type':'application/json',
//                 'Accept':'application/json'
//             }}).then((response)=>{
//                 return response.json()
//             }).then((myJson)=>{
//             console.log(data)
//              setData(myJson)
//              console.log(myJson)
//             })
//         }
        
//     useEffect(()=>{
//           getData();
//     },[])

// return(
//     <>
//     Fetch JSON Data
//     {
//         data && data.length>0 && data.map((val)=>{
//             return(
//                 <h3>{val.name},{val.capital}</h3>
//             )
//         })
//     }
//     </>
// )
// }
// export default FetchData


// import React, { useEffect, useState } from "react";

// const FetchData = () => {
//   const [data, setData] = useState([]);

//   const getData = () => {
//     fetch("data.json", {
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       }
//     })
//       .then((response) => response.json())
//       .then((myJson) => {
//         console.log(myJson);
//         setData(myJson);
//       });
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <>
//       <h2>Fetch JSON Data</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Capital</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data &&
//             data.length > 0 &&
//             data.map((val) => (
//               <tr key={val.id}>
//                 <td>{val.id}</td>
//                 <td>{val.name}</td>
//                 <td>{val.capital}</td>
//               </tr>
//             ))}
//         </tbody>
//       </table>
//     </>
//   );
// };

// export default FetchData;


// import React, { useEffect, useState } from "react";

// const FetchData = () => {
//   const [data, setData] = useState([]);

//   const getData = () => {
//     fetch("data.json", {
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       }
//     })
//       .then((response) => response.json())
//       .then((myJson) => {
//         console.log(myJson);
//         setData(myJson);
//       });
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   const tableStyle = {
//     borderCollapse: "collapse",
//     border: "1px solid #ddd",
//     marginTop: "20px",
//     width: "100%"
//   };

//   const thStyle = {
//     backgroundColor: "#f2f2f2",
//     padding: "10px",
//     border: "1px solid #ddd",
//     textAlign: "center"
//   };

//   const tdStyle = {
//     padding: "10px",
//     border: "1px solid #ddd",
//     textAlign: "center"
//   };

//   return (
//     <div style={{ textAlign: "center" }}>
//       <h2>Fetch JSON Data</h2>
//       <table style={tableStyle}>
//         <thead>
//           <tr>
//             <th style={thStyle}>ID</th>
//             <th style={thStyle}>Name</th>
//             <th style={thStyle}>Capital</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data &&
//             data.length > 0 &&
//             data.map((val) => (
//               <tr key={val.id}>
//                 <td style={tdStyle}>{val.id}</td>
//                 <td style={tdStyle}>{val.name}</td>
//                 <td style={tdStyle}>{val.capital}</td>
//               </tr>
//             ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default FetchData;
