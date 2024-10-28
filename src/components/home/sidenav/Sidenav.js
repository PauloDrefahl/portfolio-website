import React from 'react';
import SidenavTitle from './SidenavTitle';

const Sidenav = () => {
  return (
    <div className="px-7 py-4">
    
    <div className="flex justify-center items-center bg-bodyColor">
      <h1 className="text-4xl font-bold text-white">External Links</h1>
    </div>

      <SidenavTitle title="W" subTitle="ork Experience" />
      <ul>
        <li className="sidenavLi">
          <a
            href="https://www.nbc-2.com/article/florida-fgcu-homeland-security-combat-human-trafficking/60822403"
            className="hover:text-designColor"
          >
            Software Engineer Intern - HSI
          </a>
        </li>
        <li className="sidenavLi">
          <a
            href="https://orcid.org/0009-0000-8685-0644"
            className="hover:text-designColor"
          >
            Junior Researcher - FGCU
          </a>
        </li>
        <li className="sidenavLi">
          <a
            href="https://www.linkedin.com/in/paulodrefahl/"
            className="hover:text-designColor"
          >
            Teaching Assistant - FGCU
          </a>
        </li>
      </ul>

      <SidenavTitle title="P" subTitle="rojects" />
      <ul>
        <li className="sidenavLi">
          <a href="https://github.com/PauloDrefahl/NetspiderHSI" className="hover:text-designColor">
            Netspider HSI
          </a>
        </li>
        <li className="sidenavLi">
          <a href="https://github.com/PauloDrefahl/PAT" className="hover:text-designColor">
            PAT (Patent AI Technology)
          </a>
        </li>
        <li className="sidenavLi">
          <a href="https://github.com/PauloDrefahl/multi-language-identifier-NLP" className="hover:text-designColor">
            AI Language Comparison
          </a>
        </li>
        <li className="sidenavLi">
          <a href="https://github.com/PauloDrefahl/PokemonBlueCppVersion" className="hover:text-designColor">
            Pokemon Blue C++ Version
          </a>
        </li>
        <li className="sidenavLi">
          <a href="https://github.com/PauloDrefahl/transfermark-testing-automation-tool" className="hover:text-designColor">
            Transfermarkt Testing Automation
          </a>
        </li>
        <li className="sidenavLi">
          <a href="https://github.com/PauloDrefahl/Drone-Management-Platform" className="hover:text-designColor">
            Drone Management Software
          </a>
        </li>
        <li className="sidenavLi">
          <a href="https://github.com/PauloDrefahl/Internship-Database-Portal-FGCU" className="hover:text-designColor">
            Internship Database Portal FGCU
          </a>
        </li>
        <li className="sidenavLi">
          <a href="https://github.com/PauloDrefahl/Internship-Database-Portal-FGCU" className="hover:text-designColor">
            Medical Clinic Fullstack App
          </a>
        </li>
      </ul>

      <SidenavTitle title="P" subTitle="ublications" />
      <ul>
        <li className="sidenavLi">
          <a
            href="https://link.springer.com/chapter/10.1007/978-3-031-61060-8_24"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-designColor"
          >
            Autonomous Video Transmission in UAV-Swarm Platforms
          </a>
        </li>
        <li className="sidenavLi">
          <a
            href="https://drive.google.com/file/d/1GHUjOR-2IuOIRi1LyyT7UqIfOAUrB7_r/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-designColor"
          >
            Hierarchical Federated Learning-Based Smart Home System
          </a>
        </li>
      </ul>

      <SidenavTitle title="R" subTitle="each Me" />
      <ul>
        <li className="sidenavLi">Florida, USA</li>
        <li className="sidenavLi">+968 24769821</li>
        <li className="sidenavLi">pdrefah@fgcu.edu</li>
      </ul>
    </div>
  );
};

export default Sidenav;
