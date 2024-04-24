// import React,{createContex,useState,useContex} from "React"
// const ThemeContex= createContex("light")
// export const ThemeProvider=({children})=>{
//     const[theme,setTheme]=useState("light")
//     const toggleTheme=()=>{
//         setTheme((preTheme)=>(preTheme==="light"? "dark":"light"))
//     }
//     return(
        
//         <>
//         <ThemeContex.provider value={{theme,toggleTheme}}>
//             {children}

//         </ThemeContex.provider>
//         </>
//     )
// } 
// export const  useTheme=()=>{
//     return useContex(ThemeContex)
// }
















import React, { useState } from 'react'
import { createContext } from 'react'
import Ch1 from './ch1'
import Ch2 from './ch2'

export const context = createContext()

function Parent() {

  const [data] = useState(['hi this is a nejjer sab'])

  return (

    <context.Provider value={data}>
      <Ch1 />
      <Ch2 />
    </context.Provider>

  )
}

export default Parent




// child
child component
import React, { useContext } from 'react'
import { context } from './parent'

function Ch1() {
    const[data]=useContext(context)
  return (
    <div>am child 1 {data}</div>
  )
}

export default Ch1