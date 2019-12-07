import React from 'react'
import PropTypes from 'prop-types'

const ProjectCard = ({
  screenshot,
  name,
  tech_list,
  description,
  website_link,
  repo_link,
}) => (
  <div className="flip-card">
    <div className="flip-card-inner">
      <div className="flip-card-front">
        <img className="project-img" src={screenshot} alt="Avatar" />
        <h3 className="projectName">{name}</h3>
        <p className="description">{description}</p>
        <FontAwesomeIcon className="arrow"  icon={faAngleRight} size="2x" /> 
      </div>
      <div className="flip-card-back">
          <h3 className="techList-title">Tech Used</h3>
          <ul>{tech_list}</ul>
          <div className="Card-Demo-button">
              <a href={website_link} className="btn btn-white" target="_blank" rel="noopener noreferrer">Demo</a>                
          </div>
          <div className="Card-Repo-button">
            <a href={repo_link} className="btn btn-white" target="_blank" rel="noopener noreferrer">Repo</a>                
          </div>
      </div>
    </div>
  </div>
)

export default ProjectCard