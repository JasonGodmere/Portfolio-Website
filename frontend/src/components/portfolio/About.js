import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';
import './Portfolio.css';


export default class About extends Component {
  render() {
    return (
      <div className="Port-container">
        <h1 className="Port-header--lg">ABOUT</h1>

        <div className="About-header">
          <div>
            <h2>Bio</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna 
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
              ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit 
              esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <div>
            <h2>Skills</h2>
            <div className="About-skills-container">
              <p>Python</p>
              <div className="About-skills">
                <div className="About-skill python"><p>90%</p></div>
              </div>
              <p>HTML/CSS</p>
              <div className="About-skills">
                <div className="About-skill html-css"><p>80%</p></div>
              </div>
              <p>JavaScript</p>
              <div className="About-skills">
                <div className="About-skill js"><p>70%</p></div>
              </div>
              <p>PHP</p>
              <div className="About-skills">
                <div className="About-skill php"><p>40%</p></div>
              </div>
              <p>Java</p>
              <div className="About-skills">
                <div className="About-skill java"><p>30%</p></div>
              </div>
            </div>
          </div>
        </div>

        

        <div className="About-chart-container">
          <div>
            <h2 className="Port-header--sm Port-header--list">Back-End</h2>
            <ul className="Port--list">
              <li>Django</li>
              <li>ORM</li>
              <li>SQL</li>
              <li>Wordpress</li>
              <li>Flask</li>
            </ul>
          </div>
          <div>
            <Pie className="About-pie-chart"
              data={chartData}
              options={{
                legend: {
                  labels: {
                    fontSize: 14
                  }
                },
                rotation: 0.45 * Math.PI,
                maintainAspectRatio: false
              }}
            />
          </div>
          <div>
            <h2 className="Port-header--sm Port-header--list">Front-End</h2>
            <ul className="Port--list">
              <li>React</li>
              <li>D3</li>
              <li>Chart.js</li>
              <li>jQuery</li>
            </ul>
            <h2 className="Port-header--sm Port-header--list">Mobile</h2>
            <ul className="Port--list">
              <li>IOS</li>
              <li>Android</li>
            </ul>
          </div>
        </div>

      </div>
    )
  }
}

const chartData = {
  labels: ['Back-End', 'Front-End', 'Mobile'],
  datasets: [{
    label: '# of Votes',
    data: [50, 40, 10],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)'
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)'
    ],
    borderWidth: 1
  }]
}