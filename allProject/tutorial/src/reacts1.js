

// import React, { useEffect, useState } from "react"
// import 'bootstrap/dist/css/bootstrap.min.css'

// import { useState } from "react"

// const App = () => {
//   const [users, setUsers] = useState([])

//   const fetchUserData = () => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(response => {
//         return response.json()
//       })
//       .then(data => {
//         setUsers(data)
//       })
//   }

//   useEffect(() => {
//     fetchUserData()
//   }, [])

//   return (
//     <div>
//       {users.length > 0 && (
//         <ul>
//           {users.map(user => (
//             <li key={user.title}>{user.name}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default App;


import React, { useState }  from "react";

const AddPlan = ()=>{
    const[planName,setPlanName]=useState("")
    const[planAmount,setPlanAmount]=useState("")
    const[planType,setPlanType]=useState("")
    return(
        <div className="container">
            <div className="sub-container">
                <h2>Add Plan</h2>
                <form>
                    <label htmlFor="name">Plan Name</label>
                    <input
                    type="text"
                    id="name" 
                    value={planName}
                    placeholder="Free trial"
                    onChange={(event)=>setPlanName(event.target.value)}
                    />
                    <label htmlFor="amount">Plan Name</label>
                    <input
                    type="text"
                    id="amount" 
                    value={planAmount}
                    placeholder="Free trial"
                    onChange={(event)=>setPlanAmount(event.target.value)}
                    />
                </form>

            </div>
        </div>
    )

}




















import React from "react";
// import { useState } from "react";
// import React,{useState} from "react";
// function Hello(){
//     return(
//     <>
//     <Hello1/>
//     <Hello2/>
//     <Hello3/>
//     </>)
// }
// function Hello1(){
//     return <h2>
//         hello world
//     </h2>
// }
// function Hello2(){
//     return <h2>
// how are you    </h2>
// }
// function Hello3(){
//     return <h2>
// today is good day    </h2>
// }





// let ParentComponent=()=>{
//    const[count,setCount]=useState(0)
//    let DecrementButton=()=>{
//     setCount(count-1)
//    }
//    let IncrementButton=()=>{
//     setCount(count+1)


//    return(
//     <>
//     <button onClick={DecrementButton}>-</button>
//     <h2>{count}</h2>
//     <button onClick={IncrementButton}>+</button>
//     </>
//    )
// }
// export default ParentComponent;




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




// let ParentComponent=()=>{
//     // let name="nazeer"

// let handleButton=()=>{
//     alert("hello world")
// }

//     return(
//         <>
//         <ChildComponent fname=" helloWorld"  button={handleButton}/>
//         </>
//     )

// }
// let ChildComponent=(props)=>{
//     return(
//         <>
//         <button onClick={props.button}>click me</button>
//         <p> { props.fname} </p>

//         </>
//     )

// }
// export default ParentComponent;


// import React from "react";
// import "./styles.css";
// // import { useState } from "react";

//  function App() {
//   const [firstName, setFirstName] = useState(""); // a useState in React JS variable to store the first name
//   const [lastName, setLastName] = useState(""); // a useState in React JS to store the last name
//   const [email, setEmail] = useState(""); // a useState in React JS to store the email address
//   const [remarks, setRemarks] = useState(""); // a useState in React JS to store the remarks

//   function handleClick() {
//     alert(firstName + "\n" + lastName + "\n" + email + "\n" + remarks); // this will show an alert when the submit button is clicked
//   }

//   return (
//     <div className="App">
//       <input
//         placeholder="First Name"
//         onChange={(e) => {
//           setFirstName(e.target.value); // this will save the first name
//         }}
//       />
//       <input
//         placeholder="Last Name"
//         onChange={(e) => {
//           setLastName(e.target.value); // this will save the last name
//         }}
//       />
//       <input
//         placeholder="Email Address" // this will save the email address
//         onChange={(e) => {
//           setEmail(e.target.value);
//         }}
//       />
//       <input
//         placeholder="Remarks" // this will save the remarks
//         onChange={(e) => {
//           setRemarks(e.target.value);
//         }}
//       />
//       <button onClick={handleClick}>Submit Form</button>
//     </div>
//   );
// }
// export default App;




a








// App list
import React, { useState } from "react";

let App=()=>{
    const[task,setTask]=useState([])
    const[newTask,setNewTask]=useState("")

    let changeValue=(e)=>{
        setNewTask(e.target.value)
    }
    let addTask=()=>{
        if(newTask.trim()!==""){
            setTask([...task,newTask])
            setNewTask("")
        }
    }
    let toRemove=(a)=>{
        const updateTask =([...task])
        updateTask.splice(a,1)
        setTask(updateTask)

    }





    return(
        <>
        <input 
        placeholder="add task"
        value={newTask}
        onChange={changeValue}

        />
        <button onClick={addTask}>Add </button>
        <p>
            {
                task.map((task,index)=>
                <li key={index}>{task}
                <button onClick={toRemove}>Remove</button>


                </li>)

            
            }

        </p>
        
        </>
    )
}
export default App;




import React,{useState,useEffect} from "react";
let App=()=>{
    const [data, setData] = useState([])
    let fetchData = () => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((a) => setData(a))
    }
    
    useEffect(() => {
        fetchData()
    }, [])
    






    return(
        <>
         {
            data.map((najeer) =>
                <p key={najeer.name}> {najeer.title}</p>)


        }
        </>
    )




}
export default App;


import React,{useReducer} from "react";
const counterReducer=( state,action)=>{
    switch(action.type ){
        case "Increament":
        return {
            count:state.count+1
        }
        case "Decreament":
        return {
            count:state.count-1
        }
        case "reset":
        return {
            count:0
        }

    }

}

let Couter=()=>{
    const[state,dispatch ]=useReducer(counterReducer,{count:0})


    return(
        <>
        <button onClick={()=>dispatch({type:"Increament"})}>Increament</button>
        <button onClick={()=>dispatch({type:"Decreament"})}>deccreament</button>
        <button onClick={()=>dispatch({type:"reset"})}>reset</button>
        <p>count:{state.count}</p>
        </>
    )
}
export default Couter;













// import React from "react";
// import { BrowserRouter as Router, Link, Routes,Route } from "react-router-dom"
// // import { defaultMethod } from "react-router-dom/dist/dom";
// // const Home=()=><h2>home</h2>;
// const About=()=><h2>About</h2>;
// const Contact=()=><h2>Contact</h2>;

// const App = () => {
//     return(
//     <Router>
//         <nav>
//             <ul>
//                  <li>
//                     <Link to="/" > Home</Link></li> 
//                 <li> <Link to="/About" > About</Link>
//                 </li>
//                 <li> <Link to="/Contact" > Contact</Link>
//                 </li>
//             </ul>
//         </nav>


//         <hr />
//         <Routes>
//             {/* <Route path="/Home" element={<home/>}/> */}
//             <Route path="/About" element={<About/>}/>
//             <Route path="/Contact" element={<Contact/>}/>
            
//         </Routes>

//     </Router>
//     )
// }
// export default App;












<div className="container   ">
<div className="row">
    <div className="col">
        <div className="card">
            <div className="card-body d-flex justify-content-around">
                <div className="card1">
                    <label for="name" className="form-label">Plan Name</label>
                    <input type="email" className="form-control" id="name" placeholder="Free Trial" />
                </div>
                <div className="card2">

                    <label for="name" className="form-label">Plan Name</label>
                    <input type="email" className="form-control" id="name" placeholder="Free Trial" />

                </div>
                <div className="card3">
                <label for="Amount" className="form-label">Plan Amount</label>
                <input type="password" className="form-control" id="Amount" />
            </div>

            </div>
            
            {/* <!--drop down1--> */}
            <div className="col">
                <label for="name" className="form-label">Plan Type</label>
                <select id="name" className="form-select" p-5>
                    <option selected>Monthly</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                </select>
            </div>
            {/* <!--drop down2--> */}
            <div className="co">
                <label for="user" className="form-label"> NO of Users</label>
                <select id="user" className="form-select">
                    <option selected> 5 Users</option>
                    <option>4 Users</option>
                    <option>6 Users</option>
                </select>


            </div>
            {/* <!-- drop down 3 --> */}
            <div className="col">
                <label for="project" className="form-label">No of Projects</label>
                <select id="project" className="form-select">
                    <option>5 Projects</option>
                    <option>6 Projects</option>
                    <option>7 Projects</option>

                </select>
            </div>
            {/* <!--drop down4--> */}
            <div className="col">
                <label for="gb" className="form-label"> No of Storage Space</label>
                <select id="gb" className="form-select">
                    <option selected>5 GB</option>
                    <option>6 GB</option>
                    <option>7 Gb</option>
                </select>


            </div>
            {/* <!-- Text area --> */}
            <div className="mb-3">
                <label for="area" className="form-label"> Plan Description</label>
                <textarea className="form-control" id="area" rows="3"></textarea>
            </div>
            <div className="col">
                <div className="form-check form-switch">
                    <label className="form-check-label" for="check1"> Status</label>

                    <input className="form-check-input" type="checkbox" role="switch" id="check1" checked />
                </div>
                <div className="col-auto text-center">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </div>

        </div>



    </div>
</div>
</div>


// navbar
{/* <div class="container   ">
    <div class="row ">
      <div class="col d-flex justify-content-around">
        <!-- first container -->
        <div class="card w-25">
          <div class="card-body">
            <div>
              <h4 class="card-title text-center">Free</h4>
              <h3 class="card-title text-center">$0</h3>
              <p> <i class="bi bi-check-lg text-success"></i><strong>1 User</strong> </p>
              <p><i class="bi bi-check-lg text-success"></i> 5 Projects</p>
              <p> <i class="bi bi-check-lg text-success"></i>5 GB Storage</p>
            </div>
           
            <div class="d-grid gap-2 mb-4">
              <button class="btn btn-secondary " type="button">Edit </button>
            </div>
          </div>
        </div>
        <!-- second -->
        <div class="card w-25"  >
          <div class="card-body">
            <div>
              <h4 class="card-title text-center">Professional</h4>
              <h3 class="card-title text-center">$199/mo</h3>
              <p> <i class="bi bi-check-lg text-success"></i><strong>30 User</strong> </p>
              <p><i class="bi bi-check-lg text-success"></i> 50 Projects</p>
              <p> <i class="bi bi-check-lg text-success"></i>100 GB Storage</p>
              <p> <i class="bi bi-check-lg text-success"></i>Unlimited Message</p>
              <p> <i class="bi bi-check-lg text-success"></i>24/7 Customer Support</p>
            </div>
          
            <div class="d-grid gap-2 mb-4">
              <button class="btn btn-secondary " type="button">Edit </button>
            </div>
          </div>
        </div>
        <!-- 3rd container -->
        <div class="card w-25" >
          <div class="card-body">
            <h4 class="card-title text-center">Enterprise</h4>
            <h3 class="card-title text-center">$399/mo</h3>
            <p> <i class="bi bi-check-lg text-success"></i><strong>Unlimited User</strong> </p>
            <p><i class="bi bi-check-lg text-success"></i> Unlimited Projects</p>
            <p> <i class="bi bi-check-lg text-success"></i>500 GB Storage</p>
            <p> <i class="bi bi-check-lg text-success"></i>Unlimited Message</p>
            <p> <i class="bi bi-check-lg text-success"></i>Voice and Video Call</p>
            <p> <i class="bi bi-check-lg text-success"></i>24/7 Customer Support</p>
            <div class="d-grid gap-2 mb-4">
              <button class="btn btn-secondary" type="button">Edit </button>
            </div>
          </div>
        </div>
        
      </div>
      <!-- <h4>Plan Details</h4>
    <table class="table w-50">
      <thead>
        <tr>
          <th scope="col">Plan <i class="bi bi-arrow-down text-dark"></i></th>
          <th scope="col">Plan Type<i class="bi bi-arrow-down text-dark"></i></th>
          <th scope="col">Create Date<i class="bi bi-arrow-down text-dark"></i></th>
          <th scope="col">Modified Date<i class="bi bi-arrow-down text-dark"></i></th>
          <th scope="col">Amount<i class="bi bi-arrow-down text-dark"></i></th>
          <th scope="col">Subscribed Users<i class="bi bi-arrow-down text-dark"></i></th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Free Trial</td>
          <td>Yearly</td>
          <td>9 Nov 2023</td>
          <td>8 Dec 2023</td>
          <td>Free</td>
          <td><button type="button" class="btn btn-primary">62 User</button>
          </td>
        </tr>
  
  
        <tr>
          <td>Professional</td>
          <td>Yearly</td>
          <td>9 Nov 2023</td>
          <td>8 Dec 2023</td>
          <td>$199</td>
          <td><button type="button" class="btn btn-primary">157 User</button>
          </td>
        </tr>
  
        <tr>
          <td>Enterprise</td>
          <td>Yearly</td>
          <td>9 Nov 2023</td>
          <td>8 Dec 2023</td>
          <td>$199</td>
          <td><button type="button" class="btn btn-primary">157 User</button>
          </td>
        </tr>
      </tbody>
    </table> -->
    </div>
    

  </div>
  <!-- Plan Details --> */}











