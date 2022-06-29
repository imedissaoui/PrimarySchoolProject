import React, { Component } from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
import { BrowserRouter as Router,Link,Switch,Route, useHistory } from 'react-router-dom'
import Signup from '../SignUP/Signup';
import Services from '../Services/services';
import Contactus from '../ContactUs/contactus';
import Login from '../Login/login';
import SignIn from '../../Pages/Signin';
export default class NavBar extends Component {
  
  render() {
    
    return (

      <div >
       <Router>
        <Navbar  expand="lg">
            <Container >
              
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className=" justify-content-start text-center NavBar">
                <Nav.Link as={Link} to={"/"}>الصفحة الرئيسية</Nav.Link>
                  <Nav.Link as={Link} to={"/services"}>خدمات</Nav.Link>
                  <Nav.Link as={Link} to={"/contact"} >اتصل بنا</Nav.Link>
                  <Nav.Link as={Link} to={"/signup"}>تسجيل</Nav.Link>
                  <Nav.Link as={Link} to={"/signin"}>تسجيل الدخول</Nav.Link>
                  
                  
                  
                  
                </Nav>
              </Navbar.Collapse>
              
              <Navbar.Brand href="/" className="justify-content-end">المدرسة الابتدائية</Navbar.Brand>
            </Container>
</Navbar>
<div>
  <Switch>
    
    <Route exact path="/services" component={Services}></Route>
    <Route exact exact path="/contact" component={Contactus}></Route>
    <Route exact exact path="/signup" component={Signup}></Route>
    <Route exact exact path="/signin" component={SignIn}></Route>

  </Switch>
</div>
</Router>
      </div>
    )
  }
}



/*const NavBar = () => {
    return (
      <div className="row">
        <nav className="navbar navbar-expand-md navbar-light">
          <a href="/" className="navbar-brand ">المدرسة الابتدائية</a>
          <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#toggleMobileMenu"
          aria-controls="toggleMobileMenu"
          aria-expanded="false"
          aria-lable="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="toggleMobileMenu">
            <ul className="navbar-nav ms-auto text-center">

              <li>
                <a className="nav-link" href="#">خدمات</a>
              </li>
              <li>
                <a className="nav-link" href="#" >تسجيل</a>
              </li>
              <li>
                <a className="nav-link" href="#" >تسجيل الدخول</a>
              </li>
              <li>
                <a className="nav-link" href="#" >اتصل بنا</a>
              </li>
            </ul>
            
          </div>
        </nav>
      </div>

  );
}
export default NavBar;*/
