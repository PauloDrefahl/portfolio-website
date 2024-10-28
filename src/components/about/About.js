import React from "react";
import Title from "../home/Title";
import AboutMe from "./AboutMe";
import FunFact from "./FunFact";
import MyServices from "./MyServices";

const About = () => {
  return (
    <section id="about" className="w-full">
      <Title title="About" subTitle="Me" />
      <AboutMe />
      <Title title="Core" subTitle="Competencies" />
      <MyServices />
      <Title title="Recent" subTitle="Achievements" />
      <FunFact />
    </section>
  );
};

export default About;
