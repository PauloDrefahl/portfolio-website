import React from "react";

const BlogCard = ({ image, title, subTitle, category, description, authors, university }) => {
  return (
    <div className="py-6 flex flex-col gap-4 items-center justify-center border-b-[1px] border-b-zinc-800 group">
      <div className="w-full h-52 mb-2 overflow-hidden relative cursor-pointer">
        <img
          className="w-full h-full object-cover scale-100 group-hover:scale-110 duration-300 cursor-pointer"
          src={image}
          alt="blogImage"
        />
      </div>
      <div className="flex flex-col items-center gap-2 px-4">
        <span className="text-sm text-designColor border-[1px] border-designColor px-2">
          {title}
        </span>
        <h2 className="text-base text-center font-semibold font-titleFont text-[#ccc] group-hover:text-designColor duration-300">
          {subTitle}
        </h2>
        <p className="text-sm -mt-1 text-gray-400 italic">{category}</p>
        <p className="text-sm text-gray-300 text-center mt-2">{description}</p>
        <p className="text-sm text-designColor mt-2">
          <strong>Authors:</strong> {authors}
        </p>
        <p className="text-sm text-designColor">
          <strong>University:</strong> {university}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
