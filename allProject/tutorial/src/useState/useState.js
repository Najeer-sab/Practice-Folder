// import React from "react";
// // App list
// import React, { useState } from "react";

// let App=()=>{
//     const[task,setTask]=useState([])
//     const[newTask,setNewTask]=useState("")

//     let changeValue=(e)=>{
//         setNewTask(e.target.value)
//     }
//     let addTask=()=>{
//         if(newTask.trim()!==""){
//             setTask([...task,newTask])
//             setNewTask("")
//         }
//     }
//     let toRemove=(a)=>{
//         const updateTask =([...task])
//         updateTask.splice(a,1)
//         setTask(updateTask)

//     }

//     return(
//         <>
//         <input
//         placeholder="add task"
//         value={newTask}
//         onChange={changeValue}

//         />
//         <button onClick={addTask}>Add </button>
//         <p>
//             {
//                 task.map((task,index)=>
//                 <li key={index}>{task}
//                 <button onClick={toRemove}>Remove</button>

//                 </li>)

//             }

//         </p>

//         </>
//     )
// }
// export default App;

// let Count=()=>{
//     let[count,setCount]=useState(0)

//     let increament=()=>{
//         setCount(count+1)
//     }
//     let decreament=()=>{
//         setCount(count-1)
//     }
// return(
//     <>
//     <h2>coun;l7  t the function</h2>
//     <button onClick={increament}>+</button>
//     <p>{count}</p>
//     <button onClick={decreament} style={{background:"green",color:"red" ,border:"2px solid blue", borderBottomColor:"yellow"}}>-</button>
//     </>
// )

// }
// export default Count;

// import React, { useState } from 'react';

// function App() {
//   const [volume, setVolume] = useState(50);
//   const [muted, setMuted] = useState(false);

//   const increaseVolume = () => {
//     if (volume < 100) {
//       setVolume(volume + 1);
//     }
//   };

//   const decreaseVolume = () => {
//     if (volume > 0) {
//       setVolume(volume - 1);
//     }
//   };

//   const toggleMute = () => {
//     setMuted(!muted);
//   };

//   return (
//     <div className="tv-remote">
//       <div>Volume: {volume}</div>
//       <button onClick={decreaseVolume}>Decrease Volume</button>
//       <button onClick={increaseVolume}>Increase Volume</button>
//       <button onClick={toggleMute}>{muted ? 'Unmute' : 'Mute'}</button>
//     </div>
//   );
// }

// export default App

// import React, { useState } from "react";

// const App = () => {
//   const [input, setInput] = useState("");
//   const handleInput = (value) => {
//     setInput((a) => a + value);
//   };
//   const calcuteResult = () => {
//     try {
//       setInput(eval(input));
//     } catch (error) {
//       setInput("Error");
//     }
//   };
//   const clearInput = () => {
//     setInput("");
//   };

//   return (
//     <div>
//       <input type="text" value={input} /> <br />
//       <button onClick={() => handleInput("1")}>1</button>
//       <button onClick={() => handleInput("2")}>2</button>
//       <button onClick={() => handleInput("3")}>3</button>
//       <button onClick={() => handleInput("+")}>+</button>
//       <br />
//       <button onClick={() => handleInput("4")}>4</button>
//       <button onClick={() => handleInput("5")}>5</button>
//       <button onClick={() => handleInput("6")}>6</button>
//       <button onClick={() => handleInput("-")}>-</button>
//       <br />
//       <button onClick={() => handleInput("7")}>7</button>
//       <button onClick={() => handleInput("8")}>8</button>
//       <button onClick={() => handleInput("9")}>9</button>
//       <button onClick={() => handleInput("*")}>*</button>
//       <br />
//       <button onClick={() => handleInput("0")}>0</button>
//       <button onClick={() => handleInput(".")}>.</button>
//       <button onClick={calcuteResult}>=</button>
//       <button onClick={() => handleInput("/")}>/</button>
//       <br />
//       <button onClick={clearInput}>Clear</button>
//     </div>
//   );
// };

// export default App;

// import React from 'react';
// import './App.css';
// import AppRoutes from './AppRoutes';
// import React, { useState } from 'react';

// const countries = [
//   {
//     name: 'India',
//     value: 'IN',
//     cities: ['Bangalore', 'Mumbai'],
//   },
//   {
//     name: 'USA',
//     value: 'US',
//     cities: ['New York', 'Boston'],
//   },
//   {
//     name: 'Japan',
//     value: 'JP',
//     cities: ['Tokyo', 'Kyoto'],
//   },
// ];

// function Nesteddropdown() {
//   const [Country, setCountry] = useState('');
//   const [City, setCity] = useState('');

//   const handleCountry = (event) => {
//     const countryValue = event.target.value;
//     setCountry(countryValue);
//     setCity(''); // Reset the city when the country changes
//   };

//   const handleCity = (event) => {
//     const cityValue = event.target.value;
//     setCity(cityValue);
//   };

//   return (
//     <div>
//       <select value={Country} onChange={handleCountry}>
//         <option value="">Choose a Country</option>
//         {countries.map((country) => (
//           <option key={country.value} value={country.value}>
//             {country.name}
//           </option>
//         ))}
//       </select>

//       <select value={City} onChange={handleCity}>
//         <option value="">Choose a City</option>
//         {Country &&
//           countries
//             .find((country) => country.value === Country)
//             ?.cities.map((city) => (
//               <option key={city} value={city}>
//                 {city}
//               </option>
//             ))}
//       </select>
//     </div>
//   );
// }

// export default Nesteddropdown;


















import React,{useState} from "react";
// import "./style.css";

export default function App() {
  const[data,setdata]=useState("")
  const handleclick=(a)=>{
    setdata(data+a)

  }
  const handleSum=()=>{
    try{
      setdata(eval(data))
    }
    catch(error){
      setdata("error")
    }
  }
  const clearhandle=()=>{
    setdata("")
  }
  
  return (
    <div>
      <input value={data}/>
       <br/>
      <button onclick={()=>handleclick("7")} >7</button>
      <button onclick={()=>handleclick("8")} >8</button>
      <button onclick={()=>handleclick("9")} >9</button>
      <button onclick={()=>handleclick("+")} >+</button>
      <br/>
      <button onclick={()=>handleclick("4")} >4</button>
      <button onclick={()=>handleclick("5")} >5</button>
      <button onclick={()=>handleclick("6")} >6</button>
      <button onclick={()=>handleclick("-")} >-</button>
      <br/>
      <button onclick={()=>handleclick("1")} >1</button>
      <button onclick={()=>handleclick("2")} >2</button>
      <button onclick={()=>handleclick("3")} >3</button>
      <button onclick={()=>handleclick("*")} >*  </button>
       <br/>
      <button onclick={()=>handleclick("0")} >0</button>
      <button onclick={()=>handleclick(".")} >.</button>
      <button onclick={handleSum} >=</button>
      <button onclick={()=>handleclick("/")} >/</button>
      <button onclick={clearhandle} >c</button>







    </div>
  );
}















