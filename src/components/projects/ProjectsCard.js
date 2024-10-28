import React from "react";

const ProjectsCard = ({ image, title, category, description, technologies }) => {
  return (
    <div className="w-full py-8 flex flex-col justify-center items-center border-b-[1px] border-b-zinc-800">
      <div className="w-full h-64 mb-3 overflow-hidden relative cursor-pointer group">
        <img
          className="w-full h-full object-cover scale-100 group-hover:scale-110 duration-300 cursor-pointer"
          src={image}
          alt={title}
        />
        <div className="w-full h-full absolute top-0 left-0 hover:bg-gradient-to-r from-blue-600 via-blue-600 to-blue-200 opacity-20"></div>
      </div>
      <h3 className="font-titleFont text-lg font-semibold text-[#ccc] text-center">
        {title}
      </h3>
      <p className="text-base text-gray-400 -mt-1 text-center">{category}</p>
      <p className="text-sm text-gray-300 mt-2 px-4 text-center">
        {description}
      </p>
      <p className="text-xs text-blue-400 mt-2 px-4 text-center">
        <strong>Technologies:</strong> {technologies}
      </p>
    </div>
  );
};

export default ProjectsCard;
