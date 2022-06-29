import Login from "../Component/Login/login"
import Navbar from "../Component/Navbar/navbar"
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { useState } from "react";

const SignIn = () => {
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    return ( <div id="logiiin">
        <Navbar />
        <Login />

        </div>);
}
 
export default SignIn;