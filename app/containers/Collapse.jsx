"use client";

import Image from "next/image";
import { MdWeb } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { AiOutlineArrowUp as SiArrowUp } from "react-icons/ai";

const Collapse = ({
  title,
  description,
  pict,
  synopsis,
  hrefSite,
  hrefGithub,
  firstFramework,
  secondFramework,
  active,
  setActive,
}) => {
  const isActive = active === title;

  const handleClick = () => {
    setActive(isActive ? null : title);
  };

  return (
    <div
      className="relative flex flex-col rounded-md overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out"
      onClick={handleClick}
      aria-expanded={isActive}
    >
      {/* Image principale */}
      <Image
        src={pict}
        alt={title}
        width={1000}
        height={250}
        className="w-full h-48 sm:h-96  transition-transform duration-300 ease-in-out hover:scale-105"
      />

      {/* Vue détaillée */}
      <div
        className={`transition-[max-height] duration-300 ease-in-out ${
          isActive ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        {isActive && (
          <div className="flex flex-col p-4 bg-[var(--background)] text-[var(--text)]">
            <h2 className="text-4xl md:text-3xl text-center md:text-left" style={{ fontFamily: "Vipnagorgialla", letterSpacing: "4px" }}>{title}</h2>
            <p className="text-lg md:text-base text-center md:text-left" style={{ fontFamily: "Honor",
            color: "var(--text)", letterSpacing: "3px"}}>{description}</p>
            <p className="mt-4 font-semibold text-center md:text-left md:text-lg" style={{ fontFamily: "Honor",
            color: "var(--text)", letterSpacing: "3px"}}>{synopsis}</p>

            <div className="flex flex-col lg:flex-col sm:flex-row items-center justify-between mt-5 gap-4">
              {/* Images des frameworks */}
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

              {/* Liens vers le site et le code source */}
              <div className="flex flex-row md:flex-row items-center gap-4">
                <a href={hrefSite} target="_blank" rel="noopener noreferrer"
                className="text-4xl px-4 py-2 text-white rounded-md transition-all duration-150 hover:scale-125" style={{ color: "var(--text)" }}>
                  <MdWeb />
                </a>
                <a href={hrefGithub} target="_blank" rel="noopener noreferrer"
                className="text-4xl px-4 py-2 text-white rounded-md transition-all duration-150 hover:scale-125" style={{ color: "var(--text)" }}>
                  <FaGithub />
                </a>
              </div>
            </div>

            {/* Bouton pour masquer les informations */}
            <div
              className="flex items-center justify-center mt-4 text-sm text-blue-400 cursor-pointer transition-all duration-150 hover:scale-125" style={{ color: "var(--text)" }}
              onClick={() => setActive(null)}
            >
              <SiArrowUp className="mr-2" style={{ color: "var(--text)" }} /> Masquer les infos
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Collapse;
