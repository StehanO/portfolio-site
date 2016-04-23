import React from 'react';

module.exports = React.createClass({
    render: function render() {
        var projects = [];        
        this.props.projects.forEach((proj, i) => {
            var tech = [];
            proj.tech.forEach((t) => {
               tech.push(<li>{t}</li>); 
            });
            
            projects.push(
                <div className="project">
                    <div className="title">{proj.title}</div>
                    <div className="employer">
                        <a target="_blank" href={proj.employerlink}>{proj.employer}</a>
                    </div>
                    <div className="description">
                        <p>{proj.description}</p>
                    </div>
                    <div className="role">
                        <p>{proj.role}</p>
                    </div>
                    <div className="tech">
                        <ul>
                            {tech}
                        </ul>
                    </div>                            
                </div>);
            
        });
        
        return (
            <html>
                <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0" />
                    <meta name="author" content="Francois Laubscher" />
                    <meta name="description" content="I'm a full stack developer at Wetu where I primarily develop web apps using ASP.NET MVC. I'm probably way too enthusiastic about all things JavaScript and build NodeJS apps in my free time." />
                    <meta property="og:title" content="Francois Laubscher" />
                    <meta property="og:description" content="I'm a full stack developer at Wetu where I primarily develop web apps using ASP.NET MVC. I'm probably way too enthusiastic about all things JavaScript and build NodeJS apps in my free time." />                    
                    <title>Francois Laubscher - Resume</title>
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
                            <p>I'm a full stack developer at <a href="http://wetu.com">wetu</a> where I primarily develop web apps using ASP.NET MVC.</p>
                            <p>I'm probably way too enthusiastic about all things JavaScript and build NodeJS apps in my free time.</p>
                            <p>Check out some of my open source projects on <a target="_blank" href="http://github.com/fjlaubscher">GitHub</a>.</p>
                            <div className="contact-footer">
                                <a target="_blank" href="http://www.linkedin.com/in/fjlaubscher">linkedin</a>
                                <a target="_blank" href="http://twitter.com/fjlaubscher">twitter</a>
                                <a target="_blank" href="mailto:francoislaubscher@outlook.com">email</a>
                            </div>
                        </div>
                        <div className="history">
                            <h1>Projects I've worked on</h1>
                            {projects}
                        </div>
                    </div>
                    <script src='/js/bundle.min.js'></script>
                </body>
            </html>
        );
    }
});
