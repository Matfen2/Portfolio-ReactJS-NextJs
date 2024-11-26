import Image from "next/image";
import React from "react";
import Collapse from "../containers/Collapse";
import capacities from "../../public/data/capacities.json";
import nextJsLogo from "../../public/picts/nextJs.png";
import tailwindCSSLogo from "../../public/picts/tailwindCSS.png";
import nodeJsLogo from "../../public/picts/nodeJs.png";

const Capacities = () => {
  return (
    <div className="flex flex-col items-center px-4 mb-8 -mt-4">
      {/* Title */}
      <h2
        className="text-2xl md:text-3xl font-custom-secondary text-center mt-20 mb-8 italic tracking-widest"
        style={{ fontFamily: "Vipnagorgialla", color: "var(--text)", letterSpacing: "4px" }}
      >
        MES COMPETENCES
      </h2>

      {/* Technologies Section */}
      <div className="flex justify-center items-center mx-auto border border-border py-3 px-4 rounded-full bg-transparent max-w-xl"
          style={{ border: "2px solid var(--border)", backgroundColor: 'var(--uielements)' }}>
        <Image
          src={nextJsLogo}
          alt="Next.js Logo"
          className="w-[150px] h-[80px] object-contain"
          width={150}
          height={80}
        />
        <Image
          src={tailwindCSSLogo}
          alt="Tailwind CSS Logo"
          className="w-[200px] h-[80px] object-contain"
          width={200}
          height={80}
        />
        <Image
          src={nodeJsLogo}
          alt="Node.js Logo"
          className="w-[150px] h-[80px] object-contain"
          width={150}
          height={80}
        />
      </div>

      {/* Capacities Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {capacities.map((capacitie) => (
          <Collapse
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
