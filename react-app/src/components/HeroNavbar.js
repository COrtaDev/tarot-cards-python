import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";

const HeroNavbar = () => {
  return (
    <nav className={"navbar is-primary is-fixed-top"}>
      <div className={"container"}>
        <div id={"navMenu"} className={"navbar-menu"}>
          <div className={"navbar-start"}>
            <a className={"navbar-item"}>Home</a>
            <a className={"navbar-item"}>Documentation</a>
          </div>
          <div className={"navbar-end"}>
            <div className={"navbar-item"}>
              <div className={"buttons"}>
                <a className={"button is-dark"}>
                  <span className={"icon"}>
                    <FontAwesomeIcon icon={faGithubAlt} />
                  </span>
                  <span>Github</span>
                </a>
                <a className={"button is-link"}>Coming Soon!</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeroNavbar;
