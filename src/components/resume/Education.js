import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6 gap-6">
      {/* Experience Section */}
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Experience" icon={<MdWork />} />
        <ResumeCard
          badge="Aug 2023 - May 2024"
          title="Software Engineer Intern"
          subTitle="Homeland Security Investigations (HSI), Fort Myers, FL"
          des="Led a team of 7 developers and implemented Agile, SDLC, and DevOps practices. Contributed to over 500 investigations, 84 search warrants, and saved 63 victims."
        />
        <ResumeCard
          badge="Aug 2023 - April 2024"
          title="Junior Researcher"
          subTitle="Whitaker College of Engineering, FGCU"
          des="Published research on Computer Networks and IoT devices. Presented findings at international conferences such as HCI and ASPiRE."
        />
        <ResumeCard
          badge="Aug 2021 - May 2023"
          title="Teaching Assistant"
          subTitle="Whitaker College of Engineering, FGCU"
          des="Mentored over 110 students across various software development projects and courses. Reviewed more than 200 coding assignments and conducted 50+ office hours."
        />
      </div>

      {/* Divider */}
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>

      {/* Education Section */}
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="Expected Graduation: May 2025"
          title="Bachelor of Science in Software Engineering"
          subTitle="Florida Gulf Coast University (FGCU), Fort Myers, FL"
          des="Honors College student with a 3.8 GPA, Dean’s List from 2021-2024. Awarded the LAC merit-based scholarship totaling over $100k."
        />
        <ResumeCard
          badge="2023 - Present"
          title="Minor in Mathematics"
          subTitle="Florida Gulf Coast University (FGCU)"
          des="Focused on advanced mathematics to support software engineering research and development."
        />
      </div>
    </div>
  );
};

export default Education;
