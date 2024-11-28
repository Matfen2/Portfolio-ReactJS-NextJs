import React from 'react'

const Present = () => {
  return (
    <div className="presentation flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat text-white text-center">
      <h2
  className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider text-center"
  style={{ fontFamily: "Vipnagorgialla", color: "var(--text)" }}
>
  Mathieu FENOUIL
</h2>
<h3
  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light uppercase mt-4 text-center"
  style={{ fontFamily: "Techovier", color: "var(--text)" }}
>
  Développeur Front-End
</h3>
<p
  className="text-base sm:text-lg md:text-xl lg:text-2xl text-center max-w-md sm:max-w-xl md:max-w-3xl mx-auto mt-4 leading-relaxed tracking-wide"
  style={{
    fontFamily: "Techovier",
    lineHeight: "1.8em",
    letterSpacing: "0.05em",
    color: "var(--text)",
  }}
>
  Passionné par le développement web, notamment la partie créative.
</p>


      <button
        type="button"
        id="btnCV"
        className="mt-2 px-2 py-2 border rounded-full transition-all duration-150 text-lg uppercase tracking-wide hover:scale-110"
        style={{ backgroundColor: 'var(--text)', border: '1px solid var(--border)' }}
      >
        <a
          href="/CV%20Mathieu%20FENOUIL.pdf"
          download="CV Mathieu FENOUIL"
          className="no-underline italic"
          style={{ fontFamily: "Vipnagorgialla", color: 'var(--background)' }}
        >
          Mon CV
        </a>
      </button>
    </div>
  )
}

export default Present
