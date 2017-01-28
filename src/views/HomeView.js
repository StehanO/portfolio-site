import React from 'react';

const Ship = (props) => {
  return (
    <div className="ship">
      <div className="inner">
        <div className="sails"></div>
        <div className="sails"></div>
      </div>
    </div>
  );
};

const HomeView = () => {
  return (
    <div className="home-content">
      <Ship />
      <div className="info">
          <h1>francois laubscher</h1>
          <h2>javascript developer</h2>
          <a href="/resume">view my resume</a>
      </div>
      <Ship />
    </div>
  );
};

export default HomeView;