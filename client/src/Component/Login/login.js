import React from 'react';
import {Container, Row,Col,Form,Button} from 'react-bootstrap';
import './login.css';
import login from './3.png';
import fond from './10.png';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import Axios from 'axios';
import {BrowserRouter as Router,Route,Link, Switch} from 'react-router-dom';
import Navbar from "../Navbar/navbar"


/*import {BiEnvelope} from 'react-icons/bi';*/


const Login = () => {
  let History=useHistory(); 
  const url = window.location.href;
  const signin= (url,event)=>{
    event.preventDefault();
        
    Axios.post("http://localhost:3001/login", {
      password:password,
      login:login,
     
      
     
         
  }).then((reponse)=> {
    if(reponse==="aaa" ||reponse==="wrong"){
      alert("wrong password");
    }else{
      console.log(reponse);
      if(url==="http://localhost:3001/services/1"){
      History.push('/enseignant-profile/')
    } else {
      History.push('/administration-profile/')
    }
    }
      
  });
    
  }
  
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    
    const Add =(event)=>{
        event.preventDefault();
        
      Axios.post("http://localhost:3001/login", {
        password:password,
        login:login,
       
        
       
           
    }).then((reponse)=> {
        console.log(reponse);
        History.push('/homeadmin')
    });
    
}
    
  
  return (
    <div className="login">
      <Container className="nt-5">
        <Row>
          <Col lg={4} md={6} sm={12} className="text-center">
          <img className="iconimg" src={login} alt="" />
          <Form>
          <Form.Group  className="mail" controlId="formBasicEmail">
            
            
            <Form.Control type="email" placeholder=" البريد الإلكتروني" onChange={(e)=>setLogin(e.target.value)}/>
            
          </Form.Group>
        
          <Form.Group className="mdp" controlId="formBasicPassword">
          <div>
            
            <Form.Control type="password" placeholder="كلمة العبور" onChange={(e)=>setPassword(e.target.value)} />
            </div>
          </Form.Group>
          
          <Button onClick={(event)=>signin(url,event)}   variant="primary " type="submit" >  دخول </Button>
          <div className="text-left">
              <a href= "/" className="reset">هل نسيت كلمة السر؟</a>
              <br/>
          </div>

          <Button onClick={()=>{History.push('/signup/enseignant')}} variant="primary " type="submit"> إنشاء حساب </Button>
        </Form>
          </Col>
          

        </Row>
      
      </Container>
      <div  >
          <img  className="img2"   src={fond} alt="" />
        </div>
        
    </div>
  )};


export default Login;
