import React from "react";
import './nav.css';


const Nav = () => {
    return (
        <div className="container-fluid mb-5 bg-danger d-flex justify-content-between align-items-center">

        <ul className=" nav-item  d-flex justify-content-evenly">
            <li className="nav-link" ><img src="Navbar_Logo.png" alt="Logo"></img> </li>
            <li className="nav-link"> <i class="bi bi-list"></i></li>
            <li className="nav-link">Dreams Technologies</li>
        </ul>
        <ul className=" nav-item d-flex  ">
            <li className="nav-link">
                <form className="">
                    <input className="form-control" type="search" placeholder="search here" />
                    <i class="bi bi-search"></i>
                </form>
    
            </li>
            <li className="nav-link">
                <NavDropdown title="Dropdown" id="nav-dropdown">
                    <NavDropdown.Item eventKey="">English</NavDropdown.Item>
                    <NavDropdown.Item eventKey="">Hindi </NavDropdown.Item>
                    <NavDropdown.Item eventKey="">Kannda</NavDropdown.Item>
                </NavDropdown></li>
    
            <li className="nav-link"><i class="bi bi-bell"></i></li>
            <li className="nav-link"><i class="bi bi-chat"></i></li>
            <li className="nav-link">Admin</li>
        </ul>
    
    
    
    
    
    </div>
       

    )

}
export default Nav;
  {/* <svg
                style={{ color: "white" }}
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                className="bi bi-bar-chart-steps"
                viewBox="0 0 16 16"
              >
                <path
                  d="M.5 0a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-1 0V.5A.5.5 0 0 1 .5 0zM2 1.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-1zm2 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zm2 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5v-1zm2 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1z"
                  fill="white"
                ></path>
              </svg> */}