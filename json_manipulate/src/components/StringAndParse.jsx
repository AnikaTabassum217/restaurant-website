import React from "react";

const StringAndParse=()=>{

    let country ={
        "name":"Bangladesh",
        "capital":"Dhaka"
    }
    //  console.log("Before stringify",country);
    let countryString= JSON.stringify(country)
     console.log("Afetr stringify",countryString);
    let countryParse=JSON.parse(countryString)
    console.log("Afetr parse",countryParse)

    return(
        <>
        <h1>Stringify And Parse</h1>
        </>
    )


}

export default StringAndParse;