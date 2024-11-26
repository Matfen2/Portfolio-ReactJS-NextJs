import React from "react";
import PhotoMe from "../../public/picts/photoMe.jpg";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about-section"
      className="py-8 px-4 text-azure flex flex-col items-center"
    >
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-custom-secondary text-center mb-8" style={{ fontFamily: "Vipnagorgialla", color: "var(--text)", letterSpacing: "4px" }}>
        A PROPOS DE MOI
      </h2>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-8">
        {/* Photo Section */}
        <div className="flex flex-col items-center lg:mr-8 mt-4">
          <Image
            src={PhotoMe}
            alt="Profile"
            className="w-full max-w-lg rounded-lg border border-black mb-4"
          />
        </div>

        {/* Text Section */}
        <div className="max-w-4xl p-4 text-center space-y-4">
          <p className="text-lg md:text-xl font-custom-primary leading-relaxed" style={{ fontFamily: "Techovier", color: "var(--text)", letterSpacing: "2.5px" }}>
            Spécialisé en ReactJS et Next.js, je crée des sites centrés sur l&apos;humain, en mettant l&apos;accent sur l&apos;expérience utilisateur et l&apos;accessibilité. Passionné par l&apos;univers vidéoludique, je souhaite mettre mes compétences au service de projets innovants et immersifs, adaptés aux besoins des entreprises.
          </p>
          <p className="text-lg md:text-xl font-custom-primary tracking-wider leading-relaxed" style={{ fontFamily: "Techovier", color: "var(--text)", letterSpacing: "2.5px" }}>
            Technophile et créatif, je suis toujours à la recherche de nouvelles idées pour développer des interfaces modernes, intuitives et immersives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
