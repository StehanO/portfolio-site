import React from 'react';
import projects from '../projects.json';

// components
import Project from './Components/Project';

const ResumeView = () => {
  return (
    <div className="content">
      <div className="info">
        <div className="image">
          <img src="img/me-square_250.jpg" />
        </div>
        <h1>Hi! I'm Francois.</h1>
        <p>I'm currently working at <a target="_blank" href="http://made.agency">MADE</a> as a front end developer building front ends using React.</p>
        <p>Recently I've started working within the JavaScript stack using NodeJS, React and Redux after moving away from the .NET stack where I primarily worked as a full stack developer.</p>
        <p>Check out some of my open source projects on <a target="_blank" href="https://github.com/fjlaubscher">GitHub</a>.</p>
        <div className="contact-footer">
          <a target="_blank" href="https://medium.com/@fjlaubscher">medium</a>
          <a target="_blank" href="https://linkedin.com/in/fjlaubscher">linkedin</a>
          <a target="_blank" href="mailto:francoislaubscher@outlook.com">email</a>
        </div>
      </div>
      <div className="history">
        <h1>Projects I've worked on</h1>
        <div>{projects && projects.map((x) => <Project key={x.title} data={x} />)}</div>
      </div>
    </div>
  );
};

export default ResumeView;
