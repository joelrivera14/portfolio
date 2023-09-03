import { useState } from "react";

import "../blocks/Projects.css";

export const Projects = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isFloating, setIsFloating] = useState(false);
  const [isLevating, setIsLevatating] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const handleMouseOv = () => {
    setIsFloating(true);
  };

  const handleMouseOu = () => {
    setIsFloating(false);
  };
  const handleMouseOn = () => {
    setIsLevatating(true);
  };

  const handleMouseOff = () => {
    setIsLevatating(false);
  };
  return (
    <div className="project__parent">
      {isHovering && (
        <div className="project__caption">
          The first project I completed while part of the TripleTen (previously
          'practicum') bootcamp.
        </div>
      )}
      {isFloating && (
        <div className="project__caption">
          A website that kind of mocks Instagram with the ability to upload,
          delete and like images. Use of HTML/CSS and JavaScript to build the
          frontend while the backend was handled by a local server.
        </div>
      )}
      {isLevating && (
        <div className="project__caption">
          A website that recommends different clothing based off temperature.
          Use of React, node, express and mongoDB. Authentication and
          authorization added to website so that users could sign up/log in.
        </div>
      )}

      <div className="project__videos">
        <div
          className="project__video"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <iframe
            className="video"
            width="480"
            height="315"
            src="https://www.youtube.com/embed/OeytKusUV-M?si=aR0zCJF-n5xtI38n"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="project__buttons">
            <a
              className="project__anchor"
              href="https://joelrivera14.github.io/se_project_library/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="project__button-1">Live</div>
            </a>
            <a
              href="https://github.com/joelrivera14/se_project_library"
              target="_blank"
              rel="noreferrer"
              className="project__anchor"
            >
              <div className="project__button-2">Code</div>
            </a>
          </div>
        </div>

        <div
          className="project__video"
          onMouseOver={handleMouseOv}
          onMouseOut={handleMouseOu}
        >
          <iframe
            className="video"
            width="480"
            height="315"
            src="https://www.youtube.com/embed/KeFEGV3ueJg?si=5fT6Wwb7RiP5nh9C"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="project__buttons">
            <a
              href="https://joelrivera14.github.io/se_project_aroundtheus/"
              target="_blank"
              rel="noreferrer"
              className="project__anchor"
            >
              <div className="project__button-1">Live</div>
            </a>
            <a
              href="https://github.com/joelrivera14/se_project_aroundtheus"
              target="_blank"
              rel="noreferrer"
              className="project__anchor"
            >
              <div className="project__button-2">Code</div>
            </a>
          </div>
        </div>

        <div
          className="project__video"
          onMouseOver={handleMouseOn}
          onMouseOut={handleMouseOff}
        >
          <iframe
            className="video"
            width="480"
            height="315"
            src="https://www.youtube.com/embed/JnwOq1Kh4lI?si=YjDTtydXRsx_sSaB"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="project__buttons">
            <a
              href="https://www.weatherwear.crabdance.com/"
              target="_blank"
              rel="noreferrer"
              className="project__anchor"
            >
              <div className="project__button-1">Live</div>
            </a>
            <a
              href="https://github.com/joelrivera14/se_project_react"
              target="_blank"
              rel="noreferrer"
              className="project__anchor"
            >
              <div className="project__button-2">Code</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
