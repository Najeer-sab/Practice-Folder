import React, { useContext } from "react";
import { myContext } from "./contex";
 const Child2=()=>{
    const[data] =useContext(myContext)
    return(
        <>
        <h2> hi{data}</h2>
        

        </>
    )
 }
 export  default Child2