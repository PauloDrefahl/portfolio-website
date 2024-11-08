import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsCloudLightningFill, BsFacebook } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiSpotify } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { FiInstagram, FiMail, FiSend } from "react-icons/fi";
import CV from "./../../Paulo-Drefahl-Software-Engineer-Resume.pdf"; // PDF import
import { bannerImg } from "../../assets/index";

const Left = () => {
  const [text] = useTypewriter({
    words: [
      "Full Stack Developer",
      "Project Manager",
      "Researcher",
      "Teaching Assistant",
    ],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });

  // Email handler with pre-filled information
  const handleContactClick = () => {
    const email = "pdrefahl.dev@gmail.com";
    const subject = "Contacting You";
    const body = "Hello Paulo,\n\nI would like to discuss...";

    // Open the default email client with the pre-filled content
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="w-full lgl:w-5/12 h-full bg-bodyColor rounded-2xl shadow-testShwdow z-10">
      <div className="w-full h-3/5">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src={bannerImg}
          loading="priority"
          alt="bannerImage"
        />
      </div>
      <div className="w-full h-2/5 flex flex-col justify-between border-t-0 rounded-bl-xl rounded-br-xl">
        <div className="flex flex-col items-center gap-2 py-10">
          <h1 className="text-textColor text-4xl font-semibold">Paulo Drefahl</h1>
          <p className="text-base text-designColor tracking-wide">
            {text}
            <Cursor cursorBlinking="false" cursorStyle="|" />
          </p>
          <div className="flex justify-center gap-2 mt-2">
      <a
        href="https://github.com/PauloDrefahl"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-designColor duration-300 cursor-pointer text-xl"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/paulodrefahl"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-designColor duration-300 cursor-pointer text-xl"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://open.spotify.com/user/31yqlfxol2hhztlogne7ejvtmd34?si=eebba2a87e2543a3"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-designColor duration-300 cursor-pointer text-xl"
      >
        <SiSpotify />
      </a>
      <a
        href="https://www.facebook.com/paulo.drefahl/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-designColor duration-300 cursor-pointer text-xl"
      >
        <BsFacebook />
      </a>
      <a
        href="https://www.instagram.com/paulodrefahl/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-designColor duration-300 cursor-pointer text-xl"
      >
        <FiInstagram />
      </a>
      <a
        href="https://leetcode.com/u/PauloDrefahl/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-designColor duration-300 cursor-pointer text-xl"
      >
        <FaCode />
      </a>
      <a
        href="mailto:pdrefah@fgcu.edu"
        className="hover:text-designColor duration-300 cursor-pointer text-xl"
      >
        <FiMail />
      </a>
    </div>
        </div>
        <div className="flex h-14">
          {/* Download CV Button */}
          <a
            href={CV}
            download="Paulo_Drefahl_CV.pdf"
            className="w-1/2 border-t-[1px] borderRight border-t-zinc-800 text-sm tracking-wide uppercase gap-2 hover:text-designColor duration-300"
            rel="noreferrer"
          >
            <button className="w-full h-full flex justify-center items-center gap-2">
              Download CV <BsCloudLightningFill />
            </button>
          </a>
          <button
            onClick={handleContactClick} // Calls the email function on click
            className="w-1/2 border-t-[1px] border-t-zinc-800 text-sm tracking-wide uppercase flex justify-center items-center gap-2 hover:text-designColor duration-300"
          >
            Contact me <FiSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Left;
