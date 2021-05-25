import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import './Portfolio.css';


export default class About extends Component {
  
  constructor(props) {
    super(props);
    this.chartReference = React.createRef();
  }

  state = {
    options: {
      legend: {
        display: false
      },
      rotation: 0.45 * Math.PI,
      maintainAspectRatio: false
    },
    data: chartData
  };

  render() {
    return (
      <div id="about" className="Port-container">
        <h1 className="Port-header--lg">ABOUT</h1>
        <div className="About-header">
          <div>
            <h2>Bio</h2>
            <p>
              My name is Jason Godmere and I am a self-taught full-stack software
              developer with a background in IT and have worked with Reactjs, Linux,
              WordPress, django, Node.js and SwiftUI in previous roles at WPEngine, 
              Hawaii Energy Connection, Trilogy Education Services and more.
            </p>
          </div>
          <div>
            <h2>Skills</h2>
            <div className="About-skills-container">
              <p className="Port-header--sm">Python</p>
              <div className="About-skills">
                <div className="About-skill python"><p>100%</p></div>
              </div>
              <p className="Port-header--sm">JavaScript</p>
              <div className="About-skills">
                <div className="About-skill js"><p>100%</p></div>
              </div>
              <p className="Port-header--sm">HTML/CSS</p>
              <div className="About-skills">
                <div className="About-skill html-css"><p>70%</p></div>
              </div>
              <p className="Port-header--sm">PHP</p>
              <div className="About-skills">
                <div className="About-skill php"><p>40%</p></div>
              </div>
              <p className="Port-header--sm">Java</p>
              <div className="About-skills">
                <div className="About-skill java"><p>30%</p></div>
              </div>
            </div>
          </div>
        </div>

        

        <div className="About-chart-container">
          <div className="About-pie-chart">
            <Pie ref={this.chartReference} data={this.state.data} options={this.state.options}/>
          </div>
          <div className="About-chart-list-container">
            <div className="About-chart-list chart-list--red">
              <h2 className="Port-header--sm Port-header--list">Back-End</h2>
              <ul className="Port--list">
                <li>Django</li>
                <li>Node.js</li>
                <li>SQL</li>
                <li>Wordpress</li>
              </ul>
            </div>
            <div className="About-chart-list chart-list--blue">
              <h2 className="Port-header--sm Port-header--list">Front-End</h2>
              <ul className="Port--list">
                <li>React</li>
                <li>D3</li>
                <li>Chart.js</li>
                <li>jQuery</li>
              </ul>
            </div>
            <div className="About-chart-list chart-list--yellow">
              <h2 className="Port-header--sm Port-header--list">Mobile</h2>
              <ul className="Port--list">
                <li>SwiftUI</li>
                <li>Kotlin</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

var chartData = {
  labels: ['Back-End', 'Front-End', 'Mobile'],
  datasets: [{
    data: [40, 50, 10],
    backgroundColor: [
      'rgba(255, 99, 132, 0.8)',
      'rgba(54, 162, 235, 0.8)',
      'rgba(255, 206, 86, 0.8)'
    ],
    hoverBorderColor: 'rgba(0,0,0,0)',
    hoverBorderColor: 'rgba(0,0,0,0)',
    borderWidth: 8
  }]
}