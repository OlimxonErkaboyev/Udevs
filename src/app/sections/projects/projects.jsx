import React, { useEffect, useState } from "react";
import { data } from "../../../globals/data/projects";
import ProjectDesktop from "../../components/projectsDesktop/projectsDesktop";
import ProjectMobile from "../../components/projectsMobile/projectsMobile";

const Projects = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 900);

  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 900);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <>
      {data.map((project, index) => {
        return isDesktop ? (
          <ProjectDesktop key={index} data={project} />
        ) : (
          <ProjectMobile key={index} data={project} />
        );
      })}
    </>
  );
};

export default Projects;
