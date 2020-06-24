import React from "react";
import coderBg from "../../assests/proud-coder.svg";
import devBg from "../../assests/dev-coding.svg";
import "./Home.less";

function Home() {
  return (
    <div className="home">
      <div className="home-header-content row">
        <div className="home-header-content-child">
          <img className="proud-coder-image" src={coderBg} alt="proud coder" />
        </div>
        <div className="home-header-content-child">
          <h1 className="project-title">{`100 Days of <Code/>`}</h1>
        </div>
      </div>
      <div class="container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,160L60,154.7C120,149,240,139,360,144C480,149,600,171,720,181.3C840,192,960,192,1080,170.7C1200,149,1320,107,1380,85.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="home-content cards-container row"></div>
      <div className="home-content footer-container row">
        <div className="footer-content-child">
          <img className="proud-coder-image" src={devBg} alt="dev coder" />
        </div>
        <div className="footer-content-child">
          <h2 className="footer-text">
            100 Days of Code Challenge Dashboard by @root
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
