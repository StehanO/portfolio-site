// @flow

import React from 'react'

import styles from './styles.scss'

type Props = {
  title: string,
  description: string,
  employer: string,
  employerLink: string,
  tech: Array,
  date: string,
  role: string
}

const Project = (props: Props) => (
  <div className={styles.project}>
    <div className={styles.title}>
      {props.title} ({props.date})
    </div>
    <div className={styles.employer}>
      <a
        className={styles.employerLink}
        target="_blank"
        href={props.employerLink}
      >
        {props.employer}
      </a>
    </div>
    <div className={styles.description}>
      <p>{props.description}</p>
    </div>
    <div className={styles.role}>
      <p>{props.role}</p>
    </div>
    <div className={styles.tech}>
      <ul>{props.tech.map(x => <li key={x}>{x}</li>)}</ul>
    </div>
  </div>
)

export default Project
