import './App.css';
import React from 'react';
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  NavDropdown,
  Container,
  Row,
  Col,
  Button,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  return (
    <div className='App'>
      <Navbar id='navbar' bg='dark' expand='lg'>
        <Navbar.Brand>
          <i className='fas fa-heading fa-2x'></i>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link href='#about'>About</Nav.Link>
            <Nav.Link href='#skills'>Experience</Nav.Link>
            <Nav.Link href='#contact'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div id='sections'>
        <section id='about'>
          <div>Hello, my name is Hector Carbajal </div>
          <div>I'm a </div>
        </section>
        <section id='skills'> skills </section>
        <section id='projects'> projects </section>
        <section id='contact'> contact me</section>
      </div>
    </div>
  );
};
// section home work about contact.
export default App;
