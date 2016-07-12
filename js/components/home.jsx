"use strict";

const React = require('react');

const Home = React.createClass({
  render () {
    return (
      <div>
        <div id="elevator_pitch">
          <br />
            <h2>From Science to Tech</h2>
            <p>
              I worked for two years as a Clinical Research Coordinator on the flagship study for the UCSF Memory and Aging Center (a global leader in neurodegenerative disease research, treatment, and clinical care). As the study moved through a period of rapid growth, taking in up to 35 participants a month (each visit lasting one week, generating thousands of data points each), I found myself performing more and more monotonous tasks that I knew a computer could do. After beginning to use bash and matlab for imaging data, I wanted to learn more about how programming could make our study more efficient. I ended up teaching myself, automating every possible aspect I could along the way. After that, I had had enough time to take on new responsibilites when the senior team leader resigned.
              <br /><br />
              I also developed a new management system for research visist summaries (see <a href="https://github.com/fonsecapeter/jarvs">Jarvs</a> in my portfolio for more information). Jarvs ended up being adopeted by another large study in the center, which felt so rewarding. Not only did I make my co-workers lives easier, I was helping our research participants recieve better care.
              <br /><br />
              While working on these projects, I realized that I my greatest services to the study came through programming. Incidentally, I enjoyed this work so much more. After much consideration, I decided that I wanted to become a programmer and continue to learn how I could leverage technology to help others.
              <br /><br />
            </p>
          </div>
          <div>
            <h1>Full Stack Coding</h1>
            <p>Languages I work with:<br /></p>
            <ul style={{marginTop:'10px'}}>
              <li>Ruby</li>
              <li>Rails</li>
              <li>SQL</li>
              <li>JavaScript (Node, JQuery, React, Flux)</li>
              <li>Python</li>
              <li>Bash</li>
              <li>HTML/CSS</li>
            </ul>
          </div>
          <div id="work_experience">
            <h4>Work Experience</h4>
          </div>
          <div>
            <h1>Clinical Research Coordinator</h1>
            <p><em>2014 - present</em> &nbsp; UCSF Memory and Aging Center</p>
            <p>Primary Study: Frontotemporal Dementia: Genes, Images and Emotions<br /><br /></p>
            <ul>
              <li>Investigated a decade of data quality issues, designing and implementing new policies to prevent future buildup</li>
              <li>Expanded scope of data requests using python and matlab</li>
              <li>Reduced turnaround time for participant records by automating and building a management system</li>
              <li>Led weekly meetings, reporting to PI</li>
              <li>Managed metrics, IRB approval, competitive grant renewal, and external presentations</li>
              <li>Automated pre-visit preparation</li>
              <li>Acquired MRIs and tested with laptop-based psychometry</li>
            </ul>
            <br /><br />
            <h1>Undergraduate Researcher</h1>
            <p><em>2013 - 2014</em> &nbsp; UCSC Kellogg Lab</p>
            <p>Primary Focus: Cell Size Control<br /><br /></p>
            <ul>
              <li>Conducted research on enzymatic pathways involving nutrient-mediated cell size control in <em>S. cerevesiase</em>, focusing on Pkh1/2 and the Trs1 subunit of the PP2A complex</li>
              <li>Designed and performed experiments</li>
              <li>Formally presented results</li>
              <li>Worked with PCR, Timecourse, and Western Blot protocols</li>
              <li>Made my own strains and culture</li>
            </ul>
            <br /><br />
            <h1>Volunteer Lab Assistant</h1>
            <p><em>2012 - 2013 Summers</em> &nbsp; Novato Medical Center</p>
            <br />
            <ul>
              <li>Managed medical records and appointments</li>
              <li>Directed incoming patients, calls, and mail</li>
              <li>Sterilized medical equipment</li>
              <li>Conducted urinalysis and RST's</li>
            </ul>
            <br /><br />
            <h1>Technician</h1>
            <p><em>2010 - 2012 Summers</em> &nbsp; Vintage 47 Amplifiers</p>
            <br />
            <ul>
              <li>Fabricated complete amplifiers</li>
              <li>Built complete tube-driven circuits from schematics</li>
              <li>Designed logos and components</li>
              <li>Trained new staff</li>
            </ul>
          </div>
          <div>
            <h4>Education</h4>
          </div>
          <div>
            <h1>Bachelor of Science in Biology</h1>
            <p><em>2010 - 2014</em> &nbsp; University of California, Santa Cruz</p>
            <p>Minor in Chemistry</p>
          </div>
          <div>
            <h4>Posters/Presentations</h4>
            <p></p>
            <ul style={{marginTop:'10px'}}>
              <li><a href="http://www.neurology.org/content/86/16_Supplement/P5.191">Dissociations in Socioemotional Test Performance Predict Neurodegeneration in Intrinsic Connectivity Networks</a> <em>(<a href="poster2016.html">poster</a>: AAN 2016)</em></li>
              <li>PP2A-Rts1: Master Regulator of Nutrient-Modulated Cell Size Control in <em>S. cerevisiae</em> <em>(presentation: Kellogg Lab Undergraduate Researchers Talks 2014)</em></li>
            </ul>
          </div>
      </div>
    );
  }
});

module.exports = Home;