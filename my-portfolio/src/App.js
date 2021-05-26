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
          <ul>
            <li class='project-list'>
              <div class='project-content'>
                <h3 class='project-title'>
                  <a>Title</a>
                </h3>
                <div class='project-description'>
                  <p>
                    this is where the project description goesthis is where the
                    project description goesthis is where the project
                    description goesthis is where the project description
                    goesthis is where the project description goesthis is where
                    the project description goesthis is where the project
                    description goes
                  </p>
                </div>
                <ul>
                  <li>things it uses 1</li>
                  <li>things it uses 2</li>
                  <li>things it uses 3</li>
                </ul>
              </div>

              <div class='project-image'>
                <a href='https://i.ytimg.com/vi/TwYKwaEjJd4/maxresdefault.jpg'>
                  <img
                    src='https://i.ytimg.com/vi/TwYKwaEjJd4/maxresdefault.jpg'
                    width='700vw'
                  ></img>
                </a>
              </div>
            </li>
            <li class='project-list'>
              <div class='project-content'>
                <h3 class='project-title'>
                  <a>Title</a>
                </h3>
                <div class='project-description'>
                  <p>this is where the project description goes</p>
                </div>
                <ul>
                  <li>R</li>
                  <li>things it uses 2</li>
                  <li>things it uses 3</li>
                </ul>
              </div>
              <div class='project-image'>
                <a href='https://i.ytimg.com/vi/TwYKwaEjJd4/maxresdefault.jpg'>
                  <img
                    src='https://i.ytimg.com/vi/TwYKwaEjJd4/maxresdefault.jpg'
                    width='700'
                  ></img>
                </a>
              </div>
            </li>
          </ul>
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
