import css from "../images/cssicon.svg";
import html from "../images/htmlicon.svg";
import js from "../images/jsicon.svg";
import react from "../images/reacticon.svg";
import node from "../images/nodeicon.svg";
import mongo from "../images/mongodbicon.svg";
import jira from "../images/jira.svg";
import "../blocks/Main.css";
function Main() {
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
            <div className="main__card_front">
              <img
                src={require("../images/face.jpg")}
                alt="face"
                className="main__face"
              />
            </div>
            <p className="main__card_back-text">
              Hello! My name is Joel Rivera and I have been part of TripleTen's
              coding bootcamp for a little over a year. I have experience with
              HTML/CSS as well as JavaScript and the framework React! I also
              have experience with technologies like Express, mongoDB and
              mongoose. Here you will find my project experience and please feel
              free to contact me about any questions or hiring positions
              available.
            </p>
          </div>
        </div>
        <div className="main__icons">
          <img src={html} alt="" className="main__icon" />
          <img src={css} alt="" className="main__icon" />
          <img src={js} alt="" className="main__icon" />
          <img src={react} alt="" className="main__icon" />
          <img src={node} alt="" className="main__icon" />
          <img src={mongo} alt="" className="main__icon" />
          <img src={jira} alt="" className="main__icon" />
        </div>
      </div>
    </div>
  );
}
export default Main;
