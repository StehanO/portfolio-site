import React from 'react';

export const Home = () =>
    <html>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0"/>
            <meta name="author" content="Francois Laubscher"/>
            <meta name="description" content="Hi! I'm Francois. I'm currently working at Asimmetric as a front-end developer within the JavaScript stack using React, Redux and Firebase. For the past few years I've worked as a full stack developer, primarily developing web apps using ASP.NET."/>
            <meta name="keywords" content="Francois,Laubscher,JavaScript,JS,NodeJS,React,Redux,Cape Town,South Africa,Developer,Web developer"/>
            <title>francois laubscher - full stack developer</title>
            <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'></link>
            <link href="/css/site.min.css" rel="stylesheet"></link>
        </head>
        <body>
            <div className="home-content">
                <div className="info">
                    <h1>francois laubscher</h1>
                    <h2>full stack developer</h2>
                    <a href="/resume">view my resume</a>
                </div>
            </div>
            <script src='/js/bundle.js'></script>
        </body>
    </html>;
