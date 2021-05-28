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
          <div class='about-content'>
            <div>
              <img
                id='about-photo'
                src={require('./resources/hector.jpg').default}
                width='300'
                height='300'
              ></img>
            </div>
            <div id='about-description'>
              <p>
                Hello! my name is Hector Carbajal and I enjoy creating things
                for others to use and enjoy. My interest in web development
                started around 2018 when introduced to React. Ever since then my
                passion for developing online applications has grown.
              </p>
              <p>
                Fastforward to today, I focus on honing my development skills to
                develope efficient and useful applications. I'm always looking
                forward to learning new fun technologies to learn and implement
                into my applications.
              </p>
            </div>
          </div>

          <div class='about-content2'>
            <p>these are the technologies i am familiar with</p>
            <ul class='about-list'>
              <li>Javascript</li>
              <li>Html</li>
              <li>CSS</li>
              <li>React</li>
              <li>React.js</li>
              <li>C++</li>
              <li>Javascript</li>
              <li>Html</li>
              <li>CSS</li>
            </ul>
          </div>
        </section>
        <section id='experience'>
          <h3 id='experience-title'>Some Things I've Developed </h3>

          <div class='project-list'>
            <div class='test'>
              <div class='card-content'>
                <h2 class='card-title'>Portfolio</h2>
                <p class='card-body'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button class='button'>
                  <a href='https://github.com/7Hector27/Portfolio'>
                    Learn More
                  </a>
                </button>
              </div>
            </div>
            <div class='test'>
              <div class='card-content'>
                <h2 class='card-title'>Crypto Tracker</h2>
                <p class='card-body'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button class='button'>
                  <a href='https://github.com/7Hector27/Portfolio'>
                    Learn More
                  </a>
                </button>
              </div>
            </div>
            <div class='test'>
              <div class='card-content'>
                <h2 class='card-title'>Dream Website</h2>
                <p class='card-body'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button class='button'>
                  <a href='https://github.com/7Hector27/Portfolio'>
                    Learn More
                  </a>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section id='contact'>
          <div class='contact-title'>Get In Touch</div>
          <p class='contact-content'>
            Im currently looking for new opportunities, my inbox is always
            open.Please feel free to contact me if you have any questions.
          </p>
          <button class='contact-button'>
            <a href='mailto:Hector27c7@gmail.com'>Email Me</a>
          </button>
        </section>
      </div>
    </div>
  );
};
// section home work home contact.
export default App;
