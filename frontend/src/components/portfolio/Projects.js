import React from 'react';

// images
import ers from './images/energyrecoveryservices.PNG';
import envwifi from './images/ENV_WiFi.png';

export default function Projects() {
  return (
    <div className="Port-container">
      <h1 className="Port-header--lg">PROJECTS</h1>

      <div id="projects" className="Projects-container">

        <div className="project">
          <div><img src={ers}/></div>
          <div>
            <h2 className="Prop-header--sm project-title" >Energy Recovery Services</h2>
            <a href="https://energyrecoveryservices.com" target="_blank">
              https://energyrecoveryservices.com
            </a>
            <p>
              A custom built WordPress website and theme utilizing php backend tools
              for a dynamic multi-page company website/blog with email integration.
            </p>
          </div>
        </div>

        <div className="project">
          <div><img src={envwifi}/></div>
          <div>
            <h2 className="Prop-header--sm project-title" >ENV WiFi</h2>
            <a href="https://apps.apple.com/ca/app/env-wifi/id1520330524" target="_blank">
              IOS Version
            </a>
            {' | '}
            <a href="https://play.google.com/store/apps/details?id=com.hawaiienergyconnection.envwifi&hl=en_US" target="_blank">
              Android Version
            </a>
            <p>
              An IOS and Android tool for Enphase customers to easily
              and seemlessly connect their solar energy monitors to the internet. Automates many
              of the tedious tasks away; all you need to do is plug it in, press a button
              on the monitor and input your wifi credentials.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}