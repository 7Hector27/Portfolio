import './App.css';
import React from 'react';
import {
  Navbar,
  Nav,
  Card,
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
            <Nav.Link href='#experience'>Experience</Nav.Link>
            <Nav.Link href='#contact'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div id='sections'>
        <section id='home'>
          <div id='home-hello'>Hello, my name is </div>
          <div id='home-name'>Hector Carbajal </div>
          <div id='home-description'>
            I'm a software engineer who specializes in frontend
            development.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </div>
        </section>
        <section id='about'>
          <div id='about-me'>About Me </div>

          <Container>
            <Row>
              <Col>
                <div id='about-description'>
                  Hello! my name is Hector Carbajal and I enjoy creating things
                  for others to use and enjoy. My interest in web development
                  started around 2018 and every since my passion growth. Im
                  always looking forward to learning new technologies to create
                  the best website for my users.
                </div>
              </Col>
              <Col>
                <img
                  id='about-photo'
                  src={require('./resources/hector.jpg').default}
                  width='350'
                  height='350'
                ></img>
              </Col>
            </Row>
          </Container>
        </section>
        <section id='experience'>
          <div id='experience-title'>Experience</div>

          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant='top'
              src='https://www.springboard.com/library/static/5c973217aa9d6c0ef28f57438d9a2d0f/c68a4/10-08-how-to-build-a-data-scientist-portfolio.png'
            />
            <Card.Body>
              <div class='card-content'>
                <Card.Title class='card-title'>Portfolio</Card.Title>
                <Card.Text class='card-body'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant='dark' class='button'>
                  Learn More
                </Button>
              </div>
            </Card.Body>
          </Card>
        </section>
        <section id='contact'>
          <div>Get in touch</div>
          <p>
            Im currently looking for new opportunities, my inbox is always
            open.Please feel free to contact me if you have any questions
          </p>
        </section>
      </div>
    </div>
  );
};
// section home work home contact.
export default App;
