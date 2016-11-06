import React, { Component, PropTypes as pt } from 'react'

class Project extends Component {
  render () {
    const { title, description, employer, employerlink, tech, date, role } = this.props.data
    return (
      <div className="project">
        <div className="title">{title}</div>
        <div className="employer">
            <a target="_blank" href={employerlink}>{employer}</a> ({date})
        </div>
        <div className="description">
            <p>{description}</p>
        </div>
        <div className="role">
            <p>{role}</p>
        </div>
        <div className="tech">
            <ul>
                {tech.map((x) => <li>{x}</li>)}
            </ul>
        </div>
      </div>
    )
  }
}

Project.propTypes = {
  data: pt.object.isRequired
}

export default Project

