import React from 'react';

// images
import ers from './images/energyrecoveryservices.PNG';
import envwifi from './images/ENV_WiFi.png';

export default function Projects() {
  return (
    <div className="Port-container">
      <h1 className="Port-header--lg">PROJECTS</h1>

      <div className="Projects-container">

        <div className="project">
          <div><img src={ers}/></div>
          <div>
            <h2 className="Prop-header--sm project-title" >Energy Recovery Services</h2>
            <a href="https://energyrecoveryservices.com" target="_blank">
              https://energyrecoveryservices.com
            </a>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna 
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
              ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
            <a href="https://play.google.com/store/apps/details?id=com.google.android.apps.access.wifi.consumer&hl=en_US" target="_blank">
              Android Version
            </a>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna 
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
              ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}