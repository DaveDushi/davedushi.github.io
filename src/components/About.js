import React from "react";

export default function ({ avatar, about }) {
  return (
    <div>
      <section id="about">
        <div class="hero min-h-screen bg-base-200 py-28 lg:py-auto">
          <div class="hero-content flex-col lg:flex-row-reverse">
            <div class="avatar mx-16">
              <div class="w-64 rounded-full lg:w-96">
                <img src={avatar} alt="Pic of me" />
              </div>
            </div>
            <div class="mx-16">
              <h1 class="text-3xl font-bol lg:text-5xl">About Me</h1>
              <p class="py-6">{about}</p>
              <a href="#contact" class="btn btn-neutral">
                Contact
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
