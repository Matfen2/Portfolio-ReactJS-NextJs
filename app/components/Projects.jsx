"use client";

import projects from "../../public/data/projects.json";
import Collapse from "../containers/Collapse";

const Projects = () => {
  return (
    <div id="projects-section" className="flex flex-col items-center px-4 mb-8">
      <h2
        className="text-2xl md:text-3xl font-custom-secondary text-center mt-20 mb-8 italic tracking-widest"
        style={{
          fontFamily: "Vipnagorgialla",
          color: "var(--text)",
          letterSpacing: "4px",
        }}
      >
        MES PROJETS
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-8xl">
        {projects.map((project) => (
          <Collapse
            key={project.id}
            title={project.title}
            description={project.description}
            pict={project.pict}
            synopsis={project.synopsis}
            firstFramework={project.firstFramework}
            secondFramework={project.secondFramework}
            hrefSite={project.hrefSite}
            hrefGithub={project.hrefGithub}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
