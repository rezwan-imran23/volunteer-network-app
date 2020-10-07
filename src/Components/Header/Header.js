import React from 'react';
import { Button, Container, Form, FormControl, InputGroup, Nav, Navbar, NavLink } from 'react-bootstrap';
import './Header.css'
import logo from "../../logos/Group 1329.png"
import { Link } from 'react-router-dom';

const Header = () => {
  
    return (
        <div>

 <Container>

 <Navbar bg="" expand="lg">
  <img src={logo} width="200px" alt=""/>
 
    <Nav className="ml-auto mr-3">
      <Link to="/home"className="font-weight-bold text-dark p-4">Home</Link>
      <Link to="/donation"className="font-weight-bold text-dark p-4">Donation</Link>
      <Link to="/events"className="font-weight-bold text-dark p-4">Events</Link>
      <Link to="/blog"className="font-weight-bold text-dark p-4">Blog</Link>
    </Nav>
    <Form>
     <Link to="/registration"><Button className="regBtn">Register</Button></Link>
      <Button className="adBtn">Admin</Button>
    </Form>
  
</Navbar>

 
</Container>       
 
        </div>
    );
};

export default Header;