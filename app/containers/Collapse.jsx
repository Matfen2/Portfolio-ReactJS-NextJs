"use client";

import PropTypes from "prop-types";
import Image from "next/image";

const Collapse = ({ icon, capacitie, details }) => {
  return (
    <div className="rounded-lg p-6 text-center shadow-lg" style={{ border: "2px solid var(--border)", backgroundColor: 'var(--uielements)', color: 'var(--text)', width: '100%', maxWidth: '500px' }}>
      {/* Icon */}
      <div className="flex justify-center mb-4">
        <Image src={icon} alt={capacitie} width={70} height={50} />
      </div>
      {/* Title */}
      <p className="text-2xl mb-4" style={{ fontFamily: "Vipnagorgialla", letterSpacing: "2px" }}>{capacitie}</p>
      {/* Details */}
      <p className="text-lg" style={{ fontFamily: "Techovier", letterSpacing: "2px" }}>{details}</p>
    </div>
  );
};

Collapse.propTypes = {
  icon: PropTypes.string.isRequired,
  capacitie: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
};

export default Collapse;
