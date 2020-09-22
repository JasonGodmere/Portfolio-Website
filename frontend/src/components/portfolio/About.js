import React, { Component } from 'react';
import './Portfolio.css';

// images
import molecule from './images/molecule.png';
import mouse from './images/mouse.png';
import responsive from './images/responsive.png';
import stopwatch from './images/stopwatch.png';


export default class About extends Component {
  render() {
    return (
      <div className="Port-container">
        <h1 className="Port-header--lg">About</h1>

        <div className="About-header">
          <div>
            <img className="About-icon" src={stopwatch} alt="Clock"/>
            <h2 className="Port-header--md">Fast</h2>
            <p>
              Fast load times and lag free interaction, my highest priority.
            </p>
          </div>
          <div>
            <img className="About-icon" src={responsive} alt="Clock"/>
            <h2 className="Port-header--md">Responsive</h2>
            <p>
              My layouts will work on any device, big or small.
            </p>
          </div>
          <div>
            <img className="About-icon" src={mouse} alt="Clock"/>
            <h2 className="Port-header--md">Intuitive</h2>
            <p>
              Strong preference for easy to use, intuitive UX/UI.
            </p>
          </div>
          <div>
            <img className="About-icon" src={molecule} alt="Clock"/>
            <h2 className="Port-header--md">Dynamic</h2>
            <p>
              Websites don't have to be static, I love making pages come to life.
            </p>
          </div>
        </div>
      </div>
    )
  }
}