import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row pb-6">
      <div className="w-full md:w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 flex items-center">
        <div className="py-6">
          <h2 className="font-semibold mb-1">Hello! I'm Paulo. 👋</h2>
          <p className="text-base leading-6 ">
          > Software Engineer Honors Student with a minor in Mathematics <br />> Full stack Developer and Project Manager <br />> Published Researcher in IoT, Ai, and Computer Networks <br />> Former Professor Assistant
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6">
        <ul className="flex flex-col gap-1">
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Age:</span>
            21
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Location:</span>
            Florida, USA
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Class:</span>
            Senior
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">GPA:</span>
            3.7
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
