import React , {useState} from 'react';
import { BrowserRouter as Router, Link ,Switch,Route, useHistory} from 'react-router-dom';
import Signin from '../../Pages/Signin';
import Contactus from '../ContactUs/contactus';
import Services from '../Services/services';
import Signup from '../SignUP/Signup';
import './navbar.css';
import {IoMdReorder} from 'react-icons/io';
import HomePage from '../../Pages/HomePages';
import SignIn from '../../Pages/Signin';
import props from "../../Pages/HomePages"

import {HashLink} from 'react-router-hash-link';

function Navbar() {
  const url =window.location.search;
  const [showLinks, setShowLinks] = useState(false);
  let History=useHistory()
  return (
    
   <Router>
    <div className="navbar">
      <div className="leftside">
      <ul className="links" id={showLinks ? "hidden" : ""}>

     
     
    
         
          <li><Link   onClick={()=>{History.push('/signup')}}>  اشتراك</Link></li>
          <li><Link onClick={()=>{History.push('/signin')}}> تسجيل الدخول</Link></li>
          
          <li> <HashLink
          smooth
          to='#contactus'
          onClick={()=>History.push("/#contactus")}
          duration={5000}
      >
        اتصل بنا
      </HashLink></li>
      <li><HashLink onClick={()=>History.push("/#services")} smooth to='#services'>
     الخدمات‎
      </HashLink></li>
      <li> <Link onClick={()=>History.push("/")}>الصفحة الرئيسية</Link></li>
          



          
          </ul>
          <button 
          onClick={() => setShowLinks(!showLinks) }
          
          >
          <IoMdReorder
            size="40px"
          />
          </button>
          
      </div>
      <div className="rightside">
      <div className="link">
        <a href="/">مدرسة النخبة الابتدائية</a>
        </div>
      </div>
    </div>
    <div>
      
    
    </div>
    </Router>
  
  );
}

export default Navbar;
