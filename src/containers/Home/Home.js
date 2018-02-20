// @flow

import React from 'react'
import Helmet from 'react-helmet'

import Project from 'components/Project'

import projects from '../../../static/projects.json'
import styles from './styles.scss'

const Home = () => (
  <div className={styles.container}>
    <Helmet
      title="Francois Laubscher - JavaScript Developer"
      meta={[
        {
          name: 'description',
          content: 'Francois Laubscher - JavaScript Developer'
        }
      ]}
    />
    <div className={styles.info}>
      <div className={styles.image}>
        <img src="https://avatars0.githubusercontent.com/u/5119031" alt="me" />
      </div>
      <h1>Hi! I&#39;m Francois.</h1>
      <p>
        I&#39;m currently working at{' '}
        <a
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
          href="http://madecode.co.za"
        >
          MADE Code
        </a>{' '}
        as a front end developer building anything with React, Redux and Node.
      </p>
      <p>
        For the past few years I&#39;ve worked as a full stack developer in the
        JavaScript world.<br />I&#39;ve done some ASP.NET development a long
        time ago in a galaxy far, far away too.
      </p>
      <p>
        Check out some of my open source projects on{' '}
        <a
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/fjlaubscher"
        >
          GitHub
        </a>.
      </p>
      <div className={styles.contactFooter}>
        <a
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
          href="https://t.me/fjlaubscher"
        >
          telegram
        </a>
        <a
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:francoisjlaubscher@gmail.com"
        >
          email
        </a>
      </div>
    </div>
    <div className={styles.history}>
      <h1>Projects I&#39;ve worked on</h1>
      <div>
        {projects &&
          projects.map(project => <Project key={project.title} {...project} />)}
      </div>
    </div>
  </div>
)

export default Home
