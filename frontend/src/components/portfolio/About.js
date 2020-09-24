import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';
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
        <h1 className="Port-header--lg">ABOUT</h1>

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

        <div class="About-chart-container">
          <div>
            <h2 class="Port-header--sm Port-header--list">Back-End</h2>
            <ul class="Port--list">
              <li>Django</li>
              <li>ORM</li>
              <li>SQL</li>
              <li>Wordpress</li>
              <li>Flask</li>
            </ul>
          </div>
          <div>
            <Pie class="About-pie-chart"
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
            <h2 class="Port-header--sm Port-header--list">Front-End</h2>
            <ul class="Port--list">
              <li>React</li>
              <li>D3</li>
              <li>Chart.js</li>
              <li>jQuery</li>
            </ul>
            <h2 class="Port-header--sm Port-header--list">Mobile</h2>
            <ul class="Port--list">
              <li>Swift-UI</li>
              <li>Swift</li>
              <li>Kotlin</li>
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
    data: [45, 45, 10],
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