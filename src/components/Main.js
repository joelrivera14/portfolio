import { useState } from "react";
import "../blocks/Main.css";
function Main({}) {
  return (
    <div>
      <div className="main">
        <div className="main__container">
          <div className="main__container_hello">
            <h1 className="main__one" id="card-section">
              Hi!
            </h1>
            <h2 className="main__two">Im Joel.</h2>
          </div>
          <div className="main__card_container">
            <div className="main__card">
              <div className="main__card_front">
                <img
                  src={require("../images/face.jpg")}
                  alt="face"
                  className="main__face"
                />
              </div>
              <div className="main__card_back">
                <p className="main__card_back-text">
                  Hello! My name is Joel Rivera and I have been part of
                  TripleTen's coding bootcamp for a little over a year. I have
                  experience with HTML/CSS as well as JavaScript and the
                  framework React! I also have experience with technologies like
                  Express, mongoDB and mongoose. Here you will find my project
                  experience and please feel free to contact me about any
                  questions or hiring positions available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;
