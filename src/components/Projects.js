import "../blocks/Projects.css";
export const Projects = () => {
  return (
    <div className="project__parent">
      <div className="project__videos">
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
