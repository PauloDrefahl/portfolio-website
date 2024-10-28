import React from "react";
import Title from "../home/Title";
import { blogImgOne, blogImgTwo } from "../../assets";
import BlogCard from "./BlogCard";

const Publications = () => {
  return (
    <div>
      <Title title="Latest" subTitle="Publications" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <a 
            href="https://link.springer.com/chapter/10.1007/978-3-031-61060-8_24" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <BlogCard
              image={blogImgOne}
              title="September 2024"
              subTitle="Autonomous Video Transmission and Air-to-Ground Coordination in UAV-Swarm-Aided Disaster Response Platform"
              category="HCI International Conference 2024"
              description="This publication focuses on the use of UAV swarms for disaster response, presenting strategies for autonomous video transmission and coordination between drones and ground stations. The study demonstrates an improvement in mission planning and energy efficiency, making it a valuable resource for optimizing real-time disaster management systems."
              authors="Chaise Ballotti, Chengyi Qu, Wenbin Guo, Hong Wang"
              university="Florida Gulf Coast University; University of Florida; Chang'an University"
            />
          </a>
        </div>
        <div className="px-6">
          <a 
            href="https://drive.google.com/file/d/1GHUjOR-2IuOIRi1LyyT7UqIfOAUrB7_r/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <BlogCard
              image={blogImgTwo}
              title="March 2025"
              subTitle="Design of a Hierarchical Federated Generative Learning-Based Smart Home System"
              category="HCI International Conference 2025"
              description="This research introduces a hierarchical federated learning framework for smart homes, emphasizing data privacy, security, and system efficiency. The framework uses generative models to detect network threats while maintaining decentralized learning, ensuring privacy and enhancing user autonomy in managing smart home environments."
              authors="Kevin Kostage, Sean Pepper, Paulo Drefahl, Wenbin Guo, Luca Mazzola, Chengyi Qu"
              university="Florida Gulf Coast University; University of Florida; Lucerne University of Applied Sciences and Arts"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Publications;
