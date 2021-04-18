import React from "react";
import "./About.css";

const About = () => {
  return (
    <React.Fragment>
       <p className="heading-text">
        About Me
      </p>
      <div className="card">
        <div class="container">
          <p>
            Name: Prity Soni Singh
            <br />
            Roll: 1806328
            <br />
            Github profile: <a href="https://github.com/pritysonisingh" target="__blank">https://github.com/pritysonisingh</a>
            <br />
            Skills: C, C++, Java, Python, HTML, Javascript, React.js, NodeJS
            <br /><br/>
            Projects:
            <br />
            <ol>
              <li>My porfolio/personal website: </li>
              <li>Some project Some other project</li>
            </ol>
            <br />
            
            <br />
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
