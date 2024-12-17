"use client";

import Image from "next/image";
import phone from "../../public/picts/mobile.png";
import letter from "../../public/picts/letter.png";
import github from "../../public/picts/github.png";
import facebook from "../../public/picts/facebook.png";
import linkedin from "../../public/picts/linkedin.png";

function Contact() {
  return (
    <section id="contact-section" className="text-center px-4 py-8 text-white">
      {/* Title */}
      <h2
        className="text-2xl md:text-3xl font-custom-secondary mb-8 italic tracking-widest"
        style={{
          fontFamily: "Vipnagorgialla",
          color: "var(--text)",
          letterSpacing: "4px",
        }}
      >
        CONTACT
      </h2>

      {/* Description */}
      <p
        className="text-lg sm:text-xl md:text-2xl max-w-3xl font-bold mx-auto tracking-wide leading-relaxed"
        style={{
          fontFamily: "Honor",
          color: "var(--text)",
          letterSpacing: "2px",
        }}
      >
        Intéressé par mon profil ? N&apos;hésitez pas à me laisser un message pour discuter
        d&apos;une collaboration ou d&apos;une opportunité !
      </p>

      {/* Contact Methods */}
      <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-20 mt-6 px-4">
        {/* Phone */}
        <div className="flex items-center justify-center gap-4">
          <Image
            src={phone}
            alt="Phone"
            loading="lazy"
            className="w-[50px] h-[50px]"
            width={50}
            height={50}
          />
          <p
            className="text-md sm:text-lg font-semibold"
            style={{
              fontFamily: "Honor",
              color: "var(--text)",
              letterSpacing: "2px",
            }}
          >
            06 05 15 24 23
          </p>
        </div>

        {/* Email */}
        <div className="flex items-center justify-center gap-4">
          <Image
            src={letter}
            alt="Email"
            loading="lazy"
            className="w-[50px] h-[50px]"
            width={50}
            height={50}
          />
          <p
            className="text-md sm:text-lg font-semibold"
            style={{
              fontFamily: "Honor",
              color: "var(--text)",
              letterSpacing: "2px",
            }}
          >
            matfen2.0@outlook.fr
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-12">
          <a
            href="https://www.facebook.com/mathieu.fenouil.56/"
            target="_blank"
            rel="noreferrer"
            className="transition-transform hover:scale-125"
          >
            <Image
              src={facebook}
              alt="Facebook"
              loading="lazy"
              className="w-[40px] h-[40px]"
              width={40}
              height={40}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/mathieu-fenouil-5884a8193/"
            target="_blank"
            rel="noreferrer"
            className="transition-transform hover:scale-125"
          >
            <Image
              src={linkedin}
              alt="LinkedIn"
              loading="lazy"
              className="w-[40px] h-[40px]"
              width={40}
              height={40}
            />
          </a>
          <a
            href="https://github.com/Matfen2/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-125"
          >
            <Image
              src={github}
              alt="GitHub"
              loading="lazy"
              className="w-[40px] h-[40px]"
              width={40}
              height={40}
            />
          </a>
        </div>
      </div>
      
      {/* Footer */}
      <footer
        className="mt-8 text-center font-bold text-sm sm:text-md md:text-lg tracking-wider"
        style={{
          fontFamily: "Honor",
          color: "var(--text)",
          letterSpacing: "3px",
        }}
      >
        <p>© 2024 Mathieu FENOUIL, Tous droits réservés.</p>
      </footer>
    </section>
  );
}

export default Contact;
