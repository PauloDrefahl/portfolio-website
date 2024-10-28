import React from "react";
import { FaShieldAlt } from "react-icons/fa";
import { AiTwotoneAppstore } from "react-icons/ai";
import { FaDocker } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Full Stack Development"
        subTitle="Develop modern web and mobile applications. Expertise in building scalable, maintainable, and user-friendly systems."
      />
      <ServicesCard
        icons={<FaDocker />}
        title="DevOps & CI/CD"
        subTitle="Experience with tools like Jenkins, Docker, and Kubernetes to streamline deployments and maintain robust CI/CD pipelines for smooth software delivery."
      />
      <ServicesCard
  icons={<FaShieldAlt />}
  title="Cybersecurity & Compliance"
  subTitle="Experience implementing security protocols to protect sensitive data. Skilled in identifying vulnerabilities, mitigating risks, and ensuring compliance."
/>
      <ServicesCard
        icons={<AiTwotoneAppstore />}
        title="Cloud Computing & APIs"
        subTitle="Skilled in using AWS and Azure platforms to deploy and manage cloud-based applications. Proficient in creating and consuming RESTful and GraphQL APIs."
      />
    </div>
  );
};

export default MyServices;
