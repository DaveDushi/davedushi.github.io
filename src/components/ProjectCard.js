import React from "react";

export default function ProjectCard({ project }) {
  return (
    <div>
      <div class="card card-compact w-96 bg-base-100 shadow-xl mx-2 my-2">
        <figure>
          <video width="400" controls>
            <source src={project.videoPath} type="video/mp4" />
            Your browser does not support HTML video.
          </video>
        </figure>
        <div class="card-body">
          <h2 class="card-title">{project.name}</h2>
          <p>{project.description}</p>
          <div class="card-actions justify-end">
            <a class="btn btn-primary" href={project.link} target="_blank">
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
