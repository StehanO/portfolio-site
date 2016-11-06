import React from 'react'
import projects from '../projects.json'

// components
import Project from './Components/Project'

const ResumeView = () => {
  return (
    <div className="content">
      <div className="info">
        <div className="image">
          <img src="img/me-square_250.png" />
        </div>
        <h1>Hi! I'm Francois.</h1>
        <p>I'm currently working at Asimmetric as a front-end developer within the JavaScript stack using React, Redux and Firebase.</p>
        <p>For the past few years I've worked as a full stack developer, primarily developing web apps using ASP.NET.</p>
        <p>Check out some of my open source projects on <a target="_blank" href="http://github.com/fjlaubscher">GitHub</a>.</p>
        <div className="contact-footer">
          <a target="_blank" href="http://www.linkedin.com/in/fjlaubscher">linkedin</a>
          <a target="_blank" href="mailto:francoislaubscher@outlook.com">email</a>
        </div>
      </div>
      <div className="history">
        <h1>Projects I've worked on</h1>
        <div>{projects && projects.map((x) => <Project data={x} />)}</div>
      </div>
    </div>
  )
}

export default ResumeView