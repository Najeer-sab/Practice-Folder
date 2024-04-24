import React from "react"
const Button=({handleClick,children})=>{
    console.log("renderring Button,Children")
    return(
        <>
        <button onClick={handleClick}>{children}</button>
        </>
    )

}
export default Button
