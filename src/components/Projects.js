import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import projects from "../db/projects.json";

export default function Projects() {
  return (
    <div>
      <section id="projects">
        <div class="divider lg:text-3xl">Projects</div>

        <div class="flex flex-wrap justify-around lg:mx-10 lg:my-6">
          {projects.map((project) => {
            return <ProjectCard project={project} key={project.id} />;
          })}
        </div>
      </section>
    </div>
  );
}
