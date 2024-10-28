import React from "react";
import { BsTrophyFill } from "react-icons/bs";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import { IoMdPeople } from "react-icons/io";
import FunFactCard from "./FunFactCard";

const FunFact = () => {
  return (
    <div className="px-0 grid grid-cols-2 md:grid-cols-4 gap-6 pb-10">
      <FunFactCard 
        icon={<BsTrophyFill />} 
        des="Best Internship Project EagleX" 
      />
      <FunFactCard 
        icon={<SiAntdesign />} 
        des="2+ Research Papers Published" 
      />
      <FunFactCard 
        icon={<BiCodeAlt />} 
        des="2nd Place E-Hacks Hackaton" 
      />
      <FunFactCard 
        icon={<IoMdPeople />} 
        des="Honors Mentor, FGCU Engineer Ambassator " 
      />
    </div>
  );
};

export default FunFact;
