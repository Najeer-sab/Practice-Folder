
import React from "react";
 const App=()=>{
    return(
        <>
            <div className="row d-flex justify-content-between align-items-center" >
                <div className="col">
                    <ul className="nav d-flex justify-content-between border border-danger">
                        <li className="nav-item">log </li>
                        <li className="nav-item">Dream Technologies </li>
                        <li className="nav-item">navbar </li>
                    </ul>
                    <ul className="nav" style={{float:"right", border:"2px solid green", marginRight:"150px"}}>
                        <li className="nav-item " style={{paddingRight:"20px",paddingLeft:"20px"}}>Input tag </li>
                        <li className="nav-item" style={{paddingRight:"20px"}}>img </li>
                        <li className="nav-item" style={{paddingRight:"20px"}}>Name </li>
                    </ul>
              

            </div>
        </div>
        
        
        
        </>
    )
 }
 export default App;
















// import React from "react";
// // import { Link } from "react-router-dom";
// import logo from './logo.png'

// const App = () => {
//   return (
//     <div className="container mt-4 d-flex justify-content-center  align-items-center ">
//       <div className="row  ">
//         <div className="col ">
//             <div className="d-flex justify-content-center mb-3">
//             <img  src={logo} alt="logo" width={100} className=" text-center " />

//             </div>
//           <div className="card  shadow-lg" style={{width:"400px",padding:"20px"}}>
//             <div className="cord-body ">
//               <div className="card-title text-center fs-1 mb-4"> Login</div>

//               <form>
//                 <div className=" form-group">
//                   <label htmlFor="email">Email Address</label>
//                   <input
//                     className="form-control mb-4 my-3 py-3"
//                     type="text"
//                     placeholder="enter email"
//                     id="email"
//                   />
//                   <div className="d-flex justify-content-between ">
        
//                     <label htmlFor="password">Password</label>
//                     <a href=" googl.com">forget password</a>
//                   </div>
//                   <input
//                     className="form-control mb-4  my-3 py-3"
//                     type="password"
//                     placeholder="enter Password"
//                     id="password"
//                   />
                  
//                   <div className=" d-grid mb-4">
//                     <button className=" btn  btn-primary ">Login</button>
//                   </div>
//                   <div className="text-center mb-2">
//                     Don't have an account yet?
//                     <a href="google.com">Register</a>
//                     {/* <Link to="/Register">Register</Link> */}
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;
