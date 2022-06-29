import "./SignUP.css"
import SignupEleve from "./SignUPItems/SignupEleve"
import SignupEnseignant from "./SignUPItems/SignupEnseignat"
import {BrowserRouter as Router,Route,Link, Switch, useHistory} from 'react-router-dom';
import Enseignant from "./Enseignant.png";
import Eleve from "./Eleve.png";
import {Navbar,Container,Nav} from 'react-bootstrap'



const Signup = () => {
    let History=useHistory();
    return ( 
        <Router>
        <div className="signup">
            <div className="contenant">
            <div className="card">
                            <img src={Enseignant} className="image" />
                            <h1>تسجيل المدرسين</h1>
                            <button onClick={()=>{History.push('/signup/enseignant')}} className="btn btn-center">تسجيل</button> 
                            
                        </div>
                        <div className="card">
                        <img src={Eleve} className="image"   />
                            <h1>تسجيل التلاميذ</h1>
                            <button onClick={()=>{History.push('/signup/eleve')}}className="btn btn-center">تسجيل</button> 
                        </div>
            </div>
        </div>
        <div>
        <Switch>
            
        </Switch>
        </div>
        </Router>

     );
}
 
export default Signup;