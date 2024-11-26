"use client";

import React, { useState, useEffect } from "react";
import Offcanvas from "../containers/Offcanvas";

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
        {/* Desktop Navbar */}
        <nav className="flex justify-center items-center mx-auto border border-border py-3 px-4 rounded-full bg-transparent max-w-2xl"
          style={{ border: "2px solid var(--border)" }}>
          <ul className="flex flex-wrap md:space-x-8 space-y-4 md:space-y-0 justify-center">
            <li>
              <button
                className="text-2xl tracking-wide transition-all duration-300 hover:scale-105"
                style={{ color: scrolled ? "var(--background)" : "var(--text)" }}
                onClick={() => scrollToSection("about-section")}
              >
                A PROPOS DE MOI
              </button>
            </li>
            <li>
              <button
                className="text-2xl tracking-wide transition-all duration-300 hover:scale-105"
                style={{ color: scrolled ? "var(--background)" : "var(--text)" }}
                onClick={() => scrollToSection("capacities-section")}
              >
                CAPACITES
              </button>
            </li>
            <li>
              <button
                className="text-2xl tracking-wide transition-all duration-300 hover:scale-105"
                style={{ color: scrolled ? "var(--background)" : "var(--text)" }}
                onClick={() => scrollToSection("projects-section")}
              >
                PROJETS
              </button>
            </li>
            <li>
              <button
                className="text-2xl tracking-wide transition-all duration-300 hover:scale-105"
                style={{ color: scrolled ? "var(--background)" : "var(--text)" }}
                onClick={() => scrollToSection("contact-section")}
              >
                CONTACT
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden fixed top-4 right-4 bg-transparent text-text text-2xl border-none cursor-pointer"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </header>

      {/* Offcanvas for Mobile */}
      <Offcanvas scrollToSection={scrollToSection} />
    </>
  );
};

export default Header;
