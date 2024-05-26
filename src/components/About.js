import React from "react";

export default function () {
  return (
    <div>
      <section id="about">
        <div class="hero min-h-screen bg-base-200 sm:py-32">
          <div class="hero-content flex-col lg:flex-row-reverse">
            <div class="avatar mx-16">
              <div class="w-64 rounded-full lg:w-96">
                <img
                  src="https://storage.googleapis.com/personal-bucket-dave-d/quickstart-folder/me.JPG"
                  alt="Pic of me"
                />
              </div>
            </div>
            <div class="mx-16">
              <h1 class="text-3xl font-bol lg:text-5xl">About Me</h1>
              <p class="py-6">
                Hi there! I'm David, a third-year Computer Science student who
                loves coding and creating fun projects. I enjoy diving into new
                technologies and bringing creative ideas to life through code.
                Whether I'm building cool apps or tackling tricky problems, I'm
                always excited to learn and push my skills further. Welcome to
                my personal website take a look around to see what I've been
                working on and learn a bit more about me!
              </p>
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
