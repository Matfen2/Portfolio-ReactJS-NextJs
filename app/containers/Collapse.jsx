"use client";

import Image from "next/image";
import { useState } from "react";
import { MdWeb } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { AiOutlineArrowUp as SiArrowUp } from "react-icons/ai";

const Collapse = ({ title, description, pict, synopsis, hrefSite, hrefGithub, firstFramework, secondFramework }) => {
  
  const [isActive, setIsActive] = useState(false);

  const handleClick = (value) => {
    setIsActive(value);
  };

  return (
    <div
      className="relative flex flex-col rounded-md overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out"
      onClick={() => handleClick(!isActive)}
      role="button"
    >
      <Image
        src={pict}
        alt={title}
        width={1000}
        height={250}
        className="w-full h-48 sm:h-96 transition-transform duration-300 ease-in-out hover:scale-105"
      />

      {/* Vue détaillée */}
      <div
        className={`transition-[max-height] duration-300 ease-in-out ${
          isActive ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        {isActive && (
          <div className="flex flex-col p-4 bg-[var(--background)] text-[var(--text)]">
            <h2
              className="text-4xl md:text-3xl text-center md:text-left"
              style={{ fontFamily: "Vipnagorgialla", letterSpacing: "4px" }}
            >
              {title}
            </h2>
            <p
              className="text-lg md:text-base text-center md:text-left"
              style={{ fontFamily: "Honor", letterSpacing: "3px" }}
            >
              {description}
            </p>
            <p
              className="mt-4 font-semibold text-center md:text-left md:text-lg"
              style={{ fontFamily: "Honor", letterSpacing: "3px" }}
            >
              {synopsis}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-between mt-5 gap-4">
              <div className="flex gap-4 items-center">
                <Image
                  src={firstFramework}
                  alt="Framework 1"
                  width={80}
                  height={60}
                  className="object-contain"
                />
                <Image
                  src={secondFramework}
                  alt="Framework 2"
                  width={80}
                  height={60}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-row items-center gap-4">
                <a
                  href={hrefSite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-4xl hover:scale-125 transition-all duration-150"
                >
                  <MdWeb />
                </a>
                <a
                  href={hrefGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-4xl hover:scale-125 transition-all duration-150"
                >
                  <FaGithub />
                </a>
              </div>
            </div>

            <div
              className="flex items-center justify-center mt-4 text-blue-400 cursor-pointer transition-all duration-150 hover:scale-125"
              onClick={() => handleClick(false)}
            >
              <SiArrowUp className="mr-2" /> Masquer les infos
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Collapse;
