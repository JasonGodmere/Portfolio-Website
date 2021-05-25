import React, { Component } from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, NavLink } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './components/portfolio/About';
import Projects from './components/portfolio/Projects';
import Contact from './components/portfolio/Contact';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

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
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#about">ABOUT</Nav.Link>
              <Nav.Link href="#projects">PROJECTS</Nav.Link>
              <Nav.Link href="#contact">CONTACT</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="https://www.linkedin.com/in/jason-godmere-6217a3166/">
                <FaLinkedinIn /></Nav.Link>
              <Nav.Link href="https://github.com/JasonGodmere">
                <FaGithub /></Nav.Link>
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
