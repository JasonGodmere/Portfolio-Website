import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './components/portfolio/About';
import Projects from './components/portfolio/Projects';
import Contact from './components/portfolio/Contact';

class App extends Component {
  state = {
    navBar: [
      {
        title: 'home',
        body: 'HOME',
        isFeatured: true
      },
      {
        title: 'about',
        body: 'ABOUT',
        isFeatured: false
      },
      {
        title: 'projects',
        body: 'PROJECTS',
        isFeatured: false
      },
      {
        title: 'contact',
        body: 'CONTACT',
        isFeatured: false
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3 className="App-title">
            Hi, I'm Jason Godmere{'\n'}
            A full-stack developer</h3>
        </header>
        <Navbar sticky="top" variant="dark" bg="dark" expand="lg">
          {/*<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>*/}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#about">ABOUT</Nav.Link>
              <Nav.Link href="#projects">PROJECTS</Nav.Link>
              <Nav.Link href="#contact">CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <About/>
        <div className="App-projects-container">
          <Projects/>
        </div>
        <div className="App-footer">
          <div className="App-footer--shape"></div>
          <Contact/>
        </div>
      </div>
    );
  }
}

export default App;
