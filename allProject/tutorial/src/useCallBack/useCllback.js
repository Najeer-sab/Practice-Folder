import React, { useState } from "react";
import Count from "./callback1";
import Button from "./callback2";
const Parent=()=>{
    const[age,setAge]=useState(25)
    const[salary,setSalary]=useState(5000)
    const increamentAge=()=>{
         setAge( age+1)
    }
    const  incrementSalary=()=>{
        setSalary(salary+1)
    }
    return(
        <>
        <button onClick={increamentAge}>increament Age</button>
        <button onClick={incrementSalary}>increament salary</button>

        
        </>
    )
}
export default Parent