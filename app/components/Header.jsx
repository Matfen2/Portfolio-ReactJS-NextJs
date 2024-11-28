"use client";

import React, { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`} style={{ backgroundColor: scrolled ? "var(--text)" : "transparent" }}>
        <nav className="flex justify-center items-center mx-auto border border-border py-3 px-4 rounded-full bg-transparent max-w-lg md:max-w-3xl sm:max-w-xl"
          style={{ border: "2px solid var(--border)" }}>
          <ul className="flex flex-wrap md:space-x-12 space-x-6 justify-center">
            <li>
              <button
                className="text-md font-semibold md:text-2xl sm:text-xl tracking-wide transition-all duration-300 hover:scale-105"
                style={{ color: scrolled ? "var(--background)" : "var(--text)", fontFamily: "Honor" }}
                onClick={() => scrollToSection("about-section")}
              >
                A PROPOS DE MOI
              </button>
            </li>
            <li>
              <button
                className="text-md font-semibold md:text-2xl sm:text-xl tracking-wide transition-all duration-300 hover:scale-105"
                style={{ color: scrolled ? "var(--background)" : "var(--text)", fontFamily: "Honor" }}
                onClick={() => scrollToSection("capacities-section")}
              >
                CAPACITES
              </button>
            </li>
            <li>
              <button
                className="text-md font-semibold md:text-2xl sm:text-xl tracking-wide transition-all duration-300 hover:scale-105"
                style={{ color: scrolled ? "var(--background)" : "var(--text)", fontFamily: "Honor" }}
                onClick={() => scrollToSection("projects-section")}
              >
                PROJETS
              </button>
            </li>
            <li>
              <button
                className="text-md font-semibold md:text-2xl sm:text-xl tracking-wide transition-all duration-300 hover:scale-105"
                style={{ color: scrolled ? "var(--background)" : "var(--text)", fontFamily: "Honor" }}
                onClick={() => scrollToSection("contact-section")}
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
