import Image from "next/image";
import React from "react";
import Card from "../containers/Card";
import capacities from "../../public/data/capacities.json";
import nextJsLogo from "../../public/picts/nextJs.png";
import tailwindCSSLogo from "../../public/picts/tailwindCSS.png";
import nodeJsLogo from "../../public/picts/nodeJs.png";

const Capacities = () => {
  return (
    <div id="capacities-section" className="flex flex-col items-center px-4 mb-8 -mt-4">
      {/* Title */}
      <h2
        className="text-2xl sm:text-3xl md:text-4xl font-custom-secondary text-center mt-20 mb-8 italic tracking-widest"
        style={{
          fontFamily: "Vipnagorgialla",
          color: "var(--text)",
          letterSpacing: "4px",
        }}
      >
        MES COMPETENCES
      </h2>

      {/* Technologies Section */}
      <div
        className="flex md:flex-row flex-col justify-center items-center gap-6 py-4 rounded-lg px-6 max-w-full lg:max-w-6xl"
        style={{
          border: "2px solid var(--border)",
          backgroundColor: "var(--uielements)",
        }}
      >
        <div className="w-32 sm:w-36 md:w-44 flex justify-center">
          <Image
            src={nextJsLogo}
            alt="Next.js Logo"
            className="object-contain"
            width={150}
            height={80}
          />
        </div>
        <div className="w-40 sm:w-48 md:w-56 flex justify-center">
          <Image
            src={tailwindCSSLogo}
            alt="Tailwind CSS Logo"
            className="object-contain"
            width={200}
            height={80}
          />
        </div>
        <div className="w-32 sm:w-36 md:w-44 flex justify-center">
          <Image
            src={nodeJsLogo}
            alt="Node.js Logo"
            className="object-contain"
            width={150}
            height={80}
          />
        </div>
      </div>

      {/* Capacities Section */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 mt-6 w-full max-w-7xl mx-auto items-center justify-items-center">
        {capacities.map((capacitie) => (
          <Card
            key={capacitie.id}
            icon={capacitie.icon}
            capacitie={capacitie.capacitie}
            details={capacitie.details}
          />
        ))}
      </div>
    </div>
  );
};

export default Capacities;
