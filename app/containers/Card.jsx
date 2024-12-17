"use client";

import PropTypes from "prop-types";
import Image from "next/image";

const Card = ({ icon, capacitie, details }) => {
  return (
    <div
      className="rounded-lg p-6 text-center shadow-lg w-full max-w-md"
      style={{
        border: "2px solid var(--border)",
        backgroundColor: "var(--uielements)",
        color: "var(--text)",
      }}
    >
      {/* Icon */}
      <div className="flex justify-center mb-4">
        <Image
          src={icon}
          alt={capacitie}
          loading="lazy"
          className="object-contain"
          width={70}
          height={50}
        />
      </div>
      {/* Title */}
      <p
        className="text-md md:text-xl sm:text-2xl mb-4"
        style={{ fontFamily: "Vipnagorgialla", letterSpacing: "2px" }}
      >
        {capacitie}
      </p>
      {/* Details */}
      <p
        className="text-sm md:text-lg"
        style={{ fontFamily: "Honor", color: "var(--text)", letterSpacing: "3px" }}
      >
        {details}
      </p>
    </div>
  );
};

Card.propTypes = {
  icon: PropTypes.string.isRequired,
  capacitie: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
};

export default Card;
