import React from "react";
import AI from "../../assets/work/AI.png";
import DB from "../../assets/work/db.png";
import Drone from "../../assets/work/Drone.png";
import Med from "../../assets/work/med.png";
import Net from "../../assets/work/Net.png";
import PAT from "../../assets/work/PAT.png";
import PokeBlue from "../../assets/work/PokeBlue.png";
import TM from "../../assets/work/tm.png";

import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <a 
            href="https://github.com/PauloDrefahl/NetspiderHSI" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <ProjectsCard
              title="Netspider HSI"
              category="Desktop Application"
              description="Project developed during my Senior internship at Homeland Security Investigations. Software developed to assist investigators in combating human trafficking. Recognized as the Best Internship Project at EagleX 2024."
              technologies="Python, JavaScript, Selenium, Express, React, Java, Tailwind, MongoDB"
              image={Net}
            />
          </a>
          <a 
            href="https://github.com/PauloDrefahl/multi-language-identifier-NLP" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <ProjectsCard
              title="AI Language Comparison"
              category="AI / NLP Model Evaluation"
              description="A comparative analysis of RoBERTa, BERT, and DistilBERT for multilingual text identification, evaluating their performance and efficacy."
              technologies="Python, NLP, TensorFlow, PyTorch, HuggingFace"
              image={AI}
            />
          </a>
          <a 
            href="https://github.com/PauloDrefahl/PokemonBlueCppVersion" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <ProjectsCard
              title="Pokemon Blue C++ Version"
              category="Game Development"
              description="A battle game inspired by Pokémon Blue, built from scratch in C++ using SFML."
              technologies="C++, SFML"
              image={PokeBlue}
            />
          </a>
          <a 
            href="https://github.com/PauloDrefahl/transfermark-testing-automation-tool" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <ProjectsCard
              title="Transfermarkt Testing Automation"
              category="Testing Tool"
              description="Selenium-based tool for automated testing and data validation on the Transfermarkt website."
              technologies="Java, Selenium"
              image={TM}
            />
          </a>
        </div>
        <div className="px-6">
          <a 
            href="https://github.com/PauloDrefahl/PAT" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <ProjectsCard
              title="PAT (Patent AI Technology)"
              category="Full Stack Application"
              description="Assists attorneys and legal professionals with patent analysis using Large Language Models and Scikit-learn. Won 2nd place at Eagle Hacks 2024."
              technologies="React, JavaScript, Python, Flask, C++, LLMs, REST APIs"
              image={PAT}
            />
          </a>
          <a 
            href="https://github.com/PauloDrefahl/Drone-Management-Platform" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <ProjectsCard
              title="Drone Management Software"
              category="Hardware / Computer Networks"
              description="Developed as part of a research project focusing on UAV swarm optimization for disaster response. Presented at HCI International Conference 2024."
              technologies="Assembly, Networks, IoT, UAVs"
              image={Drone}
            />
          </a>
          <a 
            href="https://github.com/PauloDrefahl/Internship-Database-Portal-FGCU" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <ProjectsCard
              title="Internship Database Portal FGCU"
              category="Databases"
              description="Platform for managing internship opportunities reported by FGCU students."
              technologies="Python, PyQt5, MongoDB"
              image={DB}
            />
          </a>
          <a 
            href="https://github.com/PauloDrefahl/medical-clinic-fullstack-app" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <ProjectsCard
              title="Medical Clinic Fullstack App"
              category="Full Stack Application"
              description="A patient management system built for a medical clinic and hosted on AWS."
              technologies="HTML, CSS, JavaScript, AWS (EC2, S3, Lambda)"
              image={Med}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
