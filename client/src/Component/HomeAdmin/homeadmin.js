import React from 'react';
import './homeadmin.css';
import Fade from 'react-reveal/Fade';
import LightSpeed from 'react-reveal/LightSpeed';
import Spin from 'react-reveal/Spin';
import { BrowserRouter as Router ,Link, useHistory } from 'react-router-dom';



const HomeAdmin = () => {
   let history=useHistory();
    return (
        
 <Router>      
        <div className="homeadmin">
        <Fade top  duration={1500} delay={2000}>
                <button className="btn5"
                onClick={()=>{history.push('/donnee')}}
                >المعلومات الشّخصيّة</button>
        </Fade>
        <LightSpeed left duration={3500} delay={1000}>
                <button className="btn54" onClick={()=>{history.push('/gestionenseignant')}}> التصرف في المدرسين</button>      
        </LightSpeed>
        <LightSpeed left duration={4000} delay={1000}>
                <button className="btn55" onClick={()=>{history.push('/matiere')}}>التصرف في المواد </button>
         </LightSpeed>
        <Spin >
                <button className="btn52" onClick={()=>{history.push('/classe')}}>التصرف في الأقسام</button>
        </Spin>
        <LightSpeed right duration={3500} delay={1000}>
                <button className="btn53"onClick={()=>{history.push('/affectenseignant')}} > تعيين المدرّسين</button>
           </LightSpeed>
        <LightSpeed right duration={4000} delay={1000}>
             <button className="btn56"onClick={()=>{history.push('/emploi')}} > التّصرّف في جدول الأوقات </button>
        </LightSpeed>
        <Fade bottom duration={1500} delay={2000}>
            <button className="btn53"onClick={()=>{history.push('/dossier')}} > صندوق الأدوات </button>
        </Fade>
       </div>
       </Router>);
};

export default HomeAdmin;