import Footer from "../Component/FooterItems/Footer";
import NavBar from "../Component/NavBarItems/NavBar";
import Landing from "../Component/Landing/Landing";
import Services from "../Component/Services/services";
import Contactus from "../Component/ContactUs/contactus";
import Navbar from "../Component/Navbar/navbar";
import { useState } from "react";



const HomePage = () => {
  const [isLoggedIn,setIsLoggedIn]=useState(false);
    return (<>
    <Navbar  />
    <Landing />
    <Services />
    <Contactus/>
    <Footer/>
    </>
      );
}
 
export default HomePage;