import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

  const handleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <div
        className={`navbar fixed top-0 w-full z-10 transition-colors duration-500 ${
          isScrolled
            ? "bg-neutral bg-opacity-85 text-neutral-content"
            : "bg-neutral text-neutral-content bg-base-100"
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex="0"
              role="button"
              className="btn btn-ghost lg:hidden"
              onClick={handleDropdown}
            >
              <FontAwesomeIcon
                icon={faBars}
                className="text-neutral-content"
                size="xl"
              />
            </div>
          </div>
          <a className="btn btn-ghost text-3xl lg:text-5xl" href="#">
            DD
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="text-xl" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="text-xl" href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a className="text-xl" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {isDropdownOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-65 z-20 flex flex-col justify-top items-left">
          <ul className="menu menu-vertical p-4 text-white text-xl w-full text-center">
            <li className="p-4">
              <a href="#about" onClick={handleDropdown}>
                About
              </a>
            </li>
            <li className="p-4">
              <a href="#projects" onClick={handleDropdown}>
                Projects
              </a>
            </li>
            <li className="p-4">
              <a href="#contact" onClick={handleDropdown}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
