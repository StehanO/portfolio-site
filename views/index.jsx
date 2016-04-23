import React from 'react';

module.exports = React.createClass({
    render: function render() {
        return (
            <html>
                <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0" />
                    <meta charSet='utf-8' />
                    <title>Francois Laubscher</title>
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
                    <script src='/js/bundle.min.js'></script>
                </body>
            </html>
        );
    }
});
