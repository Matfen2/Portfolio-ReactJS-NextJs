"use client";

import React from "react";

const Header = () => {

  return (
    <>
      <header className="fixed top-0 w-full z-50 transition-all duration-300">
        <nav className="flex justify-center items-center mx-auto border border-border py-3 px-4 rounded-full bg-transparent max-w-lg md:max-w-3xl sm:max-w-xl"
          style={{ border: "2px solid var(--border)" }}>
          <ul className="flex flex-wrap md:space-x-12 space-x-6 justify-center">
            <li>
              <button
                className="text-md font-semibold md:text-2xl sm:text-xl tracking-wide transition-all duration-300 hover:scale-105"
                style={{ fontFamily: "Honor" }}
                href="#about-section"
              >
                A PROPOS DE MOI
              </button>
            </li>
            <li>
              <button
                className="text-md font-semibold md:text-2xl sm:text-xl tracking-wide transition-all duration-300 hover:scale-105"
                style={{ fontFamily: "Honor" }}
                href="#capacities-section"
              >
                CAPACITES
              </button>
            </li>
            <li>
              <button
                className="text-md font-semibold md:text-2xl sm:text-xl tracking-wide transition-all duration-300 hover:scale-105"
                style={{ fontFamily: "Honor" }}
                href="#projects-section"
              >
                PROJETS
              </button>
            </li>
            <li>
              <button
                className="text-md font-semibold md:text-2xl sm:text-xl tracking-wide transition-all duration-300 hover:scale-105"
                style={{ fontFamily: "Honor" }}
                href="contact-section"
              >
                CONTACT
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
