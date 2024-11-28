import React from "react";
import PhotoMe from "../../public/picts/photoMe.jpg";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about-section"
      className="py-8 px-4 flex flex-col items-center text-center lg:text-left"
    >
      {/* Title */}
      <h2
        className="text-2xl sm:text-3xl md:text-4xl font-custom-secondary mb-8 tracking-widest"
        style={{
          fontFamily: "Vipnagorgialla",
          color: "var(--text)",
          letterSpacing: "4px",
        }}
      >
        A PROPOS DE MOI
      </h2>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 px-4 w-full max-w-7xl">
        {/* Photo Section */}
        <div className="flex flex-col items-center w-full lg:w-1/3">
          <Image
            src={PhotoMe}
            alt="Profile"
            style={{ border: "2px solid var(--border)", objectFit: "cover" }}
            className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full mx-auto"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-2/3 space-y-6">
          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed"
            style={{
              fontFamily: "Honor",
              color: "var(--text)",
              letterSpacing: "2px",
            }}
          >
            Spécialisé en ReactJS et Next.js, je crée des sites centrés sur
            l&apos;humain, en mettant l&apos;accent sur l&apos;expérience
            utilisateur et l&apos;accessibilité. Passionné par l&apos;univers
            vidéoludique, je souhaite mettre mes compétences au service de
            projets innovants et immersifs, adaptés aux besoins des entreprises.
          </p>
          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed"
            style={{
              fontFamily: "Honor",
              color: "var(--text)",
              letterSpacing: "2px",
            }}
          >
            Technophile et créatif, je suis toujours à la recherche de nouvelles
            idées pour développer des interfaces modernes, intuitives et
            immersives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
