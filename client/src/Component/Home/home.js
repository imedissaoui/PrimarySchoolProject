import React from 'react';
import './home.css';
import Fade from 'react-reveal/Fade';
import LightSpeed from 'react-reveal/LightSpeed';
import Spin from 'react-reveal/Spin';
import { Link,useHistory,Switch,Route,BrowserRouter as Router } from 'react-router-dom';
import DonneePersonnel from '../DonnePersonnelItems/Donnees';
import Donnee from '../../Pages/Donnee';



const Home = () => {
let history=useHistory();

    return (
        
        <Router>
        <div className="home">
        <Fade top  duration={1500} delay={2000}>
                <button className="btn4"
                onClick={()=>{history.push('/donneeenseignant')}}
                >المعلومات الشّخصيّة</button>
                
        </Fade>
        <LightSpeed left duration={3500} delay={1000}>
                <button 
                className="btn41"
                onClick={()=>{history.push('/emploi')}}
                
                >جدول أوقاتي</button>
                
        </LightSpeed>
        <Spin >
                <button className="btn4"
                onClick={()=>{history.push('/gestioneleve')}}
                >التصرف في التلاميذ </button>
        </Spin>
         <LightSpeed right duration={3500} delay={1000}>
                <button className="btn42"
                onClick={()=>{history.push('/statistic')}}
                 >إحصائيّات</button>
        </LightSpeed>
        <Fade bottom duration={1500} delay={2000}>
                <button className="btn43"
                onClick={()=>{history.push('/presence')}}
                >الحضور </button>
        </Fade>
       </div>
       <Switch>
                      
               </Switch>
       </Router>
    );
};

export default Home;