import React from 'react';
import projects from '../projects.json';

const ProjectTemplate = ({proj}) =>
  <div className="project">
      <div className="title">{proj.title}</div>
      <div className="employer">
          <a target="_blank" href={proj.employerlink}>{proj.employer}</a> ({proj.date})
      </div>
      <div className="description">
          <p>{proj.description}</p>
      </div>
      <div className="role">
          <p>{proj.role}</p>
      </div>
      <div className="tech">
          <ul>
              {getProjectTech(proj.tech)}
          </ul>
      </div>
  </div>;

const getProjectTech = (tech) => tech.map((x) => <li>{x}</li>);

const getProjects = () => projects.map(x => <ProjectTemplate proj={x} />);

export class Resume extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <html>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0" />
                <meta name="author" content="Francois Laubscher" />
                <meta name="description" content="Hi! I'm Francois. I'm currently working at Asimmetric as a front-end developer within the JavaScript stack using React, Redux and Firebase. For the past few years I've worked as a full stack developer, primarily developing web apps using ASP.NET." />
                <meta name="keywords" content="Francois,Laubscher,JavaScript,JS,NodeJS,React,Redux,Cape Town,South Africa,Developer,Web developer" />
                <title>francois laubscher - resume</title>
                <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'></link>
                <link href="/css/site.min.css" rel="stylesheet"></link>
            </head>
            <body>
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
                        <div>{getProjects()}</div>
                    </div>
                </div>
                <script src='/js/bundle.js'></script>
            </body>
        </html>
    );
  }
};
