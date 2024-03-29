import { useState } from "react";

import "../blocks/Projects.css";

export const Projects = () => {
  return (
    <div className="project__parent">
      {/* {isHovering && (
        <div className="project__caption">
          The first project I completed while part of the TripleTen (previously
          'practicum') bootcamp.
        </div>
      )}
      {isFloating && (
        <div className="project__caption">
          A website that kind of mocks Instagram with the ability to upload,
          delete and like images.
        </div>
      )}
      {isLevating && (
        <div className="project__caption">
          A website that recommends different clothing based off temperature.
          Use of React, node, express and mongoDB.
        </div>
      )}
      {floating && (
        <div className="project__caption">
          An ecommerce website where the user can enjoy a full shopping
          experience. use 4242 4242 4242 4242 to get the card function to work
          as its only in Stripes test mode.
        </div>
      )} */}

      <div className="project__videos">
        <div className="project__video">
          <iframe
            className="video"
            width="480"
            height="315"
            src="https://www.youtube.com/embed/MmHGAMulfaw?si=inLqibKlgjgy3VHD"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div className="project__buttons">
            <a
              className="project__anchor"
              href="https://snazzy-sherbet-7f5380.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="project__button-1">Live</div>
            </a>
            <a
              href="https://github.com/joelrivera14/crwn-clothing"
              target="_blank"
              rel="noreferrer"
              className="project__anchor"
            >
              <div className="project__button-2">Code</div>
            </a>
          </div>
        </div>

        <div className="project__video">
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
      </div>
      <div className="project__videos">
        <div className="project__video">
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

        <div className="project__video">
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
