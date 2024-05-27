import React, { useState, useEffect } from "react";

export default function () {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className={`navbar fixed top-0 w-full z-10 transition-colors duration-500 ${
          isScrolled
            ? "bg-neutral bg-opacity-85 text-neutral-content"
            : "bg-neutral text-neutral-content bg-base-100"
        }`}
      >
        <div class="navbar-start">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-24"
            >
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <a class="btn btn-ghost text-3xl lg:text-5xl" href="#">
            DD
          </a>
        </div>
        <div class="navbar-end hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
            <li>
              <a class="text-xl" href="#about">
                About
              </a>
            </li>
            <li>
              <a class="text-xl" href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a class="text-xl" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
