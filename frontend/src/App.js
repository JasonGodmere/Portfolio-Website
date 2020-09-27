import React, { Component } from 'react';
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
