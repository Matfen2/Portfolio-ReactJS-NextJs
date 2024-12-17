function Offcanvas() {
  return (
    <div
      className="fixed top-0 right-0 h-full w-64 bg-black text-text transform translate-x-full transition-transform md:hidden z-50"
      tabIndex="-1"
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
    >
      <div className="relative p-4">
        {/* Close Button */}
        <button
          type="button"
          className="absolute top-2 right-2 text-text text-xl bg-transparent border-none cursor-pointer"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div className="flex flex-col items-center mt-10">
        <div className="w-16 h-16 rounded-full bg-border p-1 border-2 border-border object-cover mb-5"></div>
        <nav className="flex flex-col items-center">
          <ul className="flex flex-col items-center space-y-6">
            <li>
              <button
                className="text-lg font-custom tracking-wider hover:scale-110 transition-transform"
                href="#about-section"
              >
                A PROPOS DE MOI
              </button>
            </li>
            <li>
              <button
                className="text-lg font-custom tracking-wider hover:scale-110 transition-transform"
                href="#projects-section"
              >
                PROJETS
              </button>
            </li>
            <li>
              <button
                className="text-lg font-custom tracking-wider hover:scale-110 transition-transform"
                href="#capacities-section"
              >
                CAPACITES
              </button>
            </li>
            <li>
              <button
                className="text-lg font-custom tracking-wider hover:scale-110 transition-transform"
                href="contact-section"
              >
                CONTACT
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Offcanvas;
