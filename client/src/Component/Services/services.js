import React from 'react';
import { GiTeacher } from 'react-icons/gi';
import { RiAdminLine,RiParentFill } from 'react-icons/ri';
import EnseignanPage from '../../Pages/EnseignantPage';
import Roll from 'react-reveal/Roll';
import './services.css';
import { BrowserRouter as Router,Switch,Route,Link, useHistory } from 'react-router-dom';
import Home from '../Home/home';
import Contactus from '../ContactUs/contactus';
import ContactUS from '../../Pages/ContactUS';
import Homeadmin from '../../Pages/HomeAdmin';


const Services = () => {
  let History =useHistory();

  const [header] = React.useState({
    mainHeader: "الخدمات ",  
    text: " الهدف من إطلاق فضاء الخدمات الرقمية لموظفي وزارة التربية يتمثل أساسا في تقريب الخدمات للموظفين واضفاء المزيد من الشفافية في المعاملا بين الإدارة والموظّف",
});
  const [state] = React.useState([
    {id:1,
     icon: <GiTeacher/>, 
     heading:"فضاء المعلمين",
     text:"فضاء خاص بالمعلمين يحتوي على معلومات شخصية و أخرى حول التلاميذ و نظام العمل ",
    },
    {id:2,
      icon: <RiParentFill/>, 
      heading:"فضاء الولي",
      text:"فضاء  تفاعلي  يوفّر آليات لمراقبة مردود التلاميذ من خلال التواصل مع الإطار التربوي ",
     },
     {id:3,
      icon: <RiAdminLine/>, 
      heading:"فضاء الادارة",
      text:"فضاء خاص بالإدارة يشمل كل المعلومات الأساسية لضمان النظام و سيرورة السنة الدراسية بنجاح",
     },
  ])
  return (
    <Router>
<div className="services" id="services">
    <div className="container">
        <div className="services_header">
            <div className="common">
                 
                 <div>
                    <Roll right duration={1000}>
                         <h3 className="heading">{header.mainHeader}</h3>
                         <p className="mainContent">{header.text}</p>
                     </Roll>
                 </div>
                 
                 <div className="commonBorder"></div>
            </div>
            <div className="row elements">
            
                 {
                 state.map(info => (
                  <Roll right cascade duration={2000} delay={500}>
                      <div className="col-4">
                          <div className="services_box">
                               <div className="commonIcons">{info.icon}</div>
                               <div className="services_box_header">{info.heading}</div>
                               <div className="services_box_p">{info.text}</div>
                               
                              
                               <button
                               className="btn1"
                                onClick={()=>{History.push(`/services/${info.id}`)}}>
                              إطلاع
                              </button>
                                  
                          </div>             
                      </div>
                  </Roll>
                   )) }                 
              </div>      
         </div>
     </div>
     <div>



     </div>
    
</div>
<div>
  <Switch>
  
  </Switch>
</div>
</Router>

  );
}

export default Services;