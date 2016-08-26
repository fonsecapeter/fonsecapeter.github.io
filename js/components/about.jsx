"use strict";

const React = require('react');
const Link = require('react-router').Link;

const About = React.createClass({
  render () {
    return (
      <div>
        <div id="elevator_pitch">
          <br />
          <div>
            {/* <img src="icons/lab.png" className="partial_width partial_width_centered"></img> */}
            <h2>From Science to Tech</h2>
            <p>
              While working in clinical research, my time was split between administrative tasks, technology concepts, science, and health care. While learning how to use Bash and MatLab for MRI image processing/analysis, I discoverd that the same principles could apply to the rest of my work. I continued to learn Python and SQL to automate as much of the study's procedures as possible, freeing up enough of my time to take on new responsibilites when the senior team leader resigned.
              <br /><br />
              I grew into a role of improving our procedures and data with technology and am most proud of the management system I developed for our research visist summaries (<a href="https://github.com/fonsecapeter/jarvs">Jarvs</a>). While working on these projects, I realized that my greatest services to the study came through programming. Not only was I making my co-workers lives easier, I was helping our research participants recieve better care.
              <br /><br />
              I also enjoyed this work more than my other responsibilities. It kept me working early in the morning and late at night, and I couldn't help myself from finishing a new project. I decided that I wanted to do it every day and my goal is to continue learning how I can leverage technology to help others.
              <br /><br />
            </p>
          </div>
          <div>
            <h1>Languages I Work With:</h1>
            {/* <img src="icons/code-logos.png" className="partial_width"></img> */}
            <ul className="code-list">
              <li>JavaScript &nbsp; React &nbsp; Jasmine &nbsp; Flux &nbsp; Node</li>
              <li>Ruby &nbsp; &nbsp; &nbsp; &nbsp; Rails &nbsp; Rspec</li>
              <li>SQL &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; Python &nbsp;Bash &nbsp; &nbsp;&nbsp; Matlab</li>
              <li>HTML  &nbsp; &nbsp; &nbsp; &nbsp; CSS</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = About;
