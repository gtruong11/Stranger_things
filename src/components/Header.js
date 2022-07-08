import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./Header.css";

const Header = ()=>{
    return(
        <div id="header">
           <h1> Strangers' Things</h1>
           <div id="navbar">
                {/* <Link to="/posts"> POSTS </Link> */}
                <button>Posts</button>
               <button >Log In</button>
                <button >Register</button>
           </div>
           
           
        </div>
    )};
export default Header;