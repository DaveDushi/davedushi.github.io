import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import axios from "axios";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("/projects")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <section id="projects">
        <div class="divider lg:text-3xl">Projects</div>

        <div class="flex flex-wrap justify-around lg:mx-10 lg:my-6">
          {projects.map((project) => {
            return <ProjectCard project={project} />;
          })}
        </div>
      </section>
    </div>
  );
}
