import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer({ insta, li, yt, x, gh }) {
  return (
    <div>
      <footer className="footer items-center p-4 bg-neutral text-neutral-content">
        <aside className="items-center grid-flow-col">
          <a className="btn btn-ghost text-xl" href="#">
            DD
          </a>
          <p>Copyright © 2024 - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          {li && (
            <a href={li} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          )}
          {gh && (
            <a href={gh} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          )}
          {yt && (
            <a href={yt} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
          )}
          {x && (
            <a href={x} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faXTwitter} size="2x" />
            </a>
          )}
          {insta && (
            <a href={insta} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          )}
        </nav>
      </footer>
    </div>
  );
}
