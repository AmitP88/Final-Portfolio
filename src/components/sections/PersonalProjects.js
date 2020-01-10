import React from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PersonalProjects = ({ background_image, title, gridItems }) => {
  return (
    <div className="personal_projects" style={
      {
        background: `url(${background_image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        position: 'relative'
      }
    }>
      <div className="title">{title}</div>
      <div className="cards-container">
        <div className="cards-row">
          {gridItems.map(({ project }, keys) => {
            return (
              <div key={keys} className="project_card">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img className="project-img" src={project.image} alt="project_image" />
                      <h3 className="projectName">{project.title}</h3>
                      <p className="card-description">{project.description}</p>
                      <FontAwesomeIcon className="arrow" icon={'angle-right'} size="2x" />
                    </div>
                    <div className="flip-card-back">
                      <h3 className="techList-title">Tech Used</h3>
                      <ul>{project.tech_list.map(({ tech }, keys2) => {
                        return (
                          <li className="techListItem" key={keys2}>{tech}</li>
                        )
                      })}</ul>
                      <div className="Card-Demo-button">
                        <a href="#" className="btn btn-white" target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon className="fontawesome-icon" icon={'link'} size="2x" />
                          <span className="button-label">Demo</span>                      
                        </a>                
                      </div>
                      <div className="Card-Repo-button">
                        <a href="#" className="btn btn-white" target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon className="fontawesome-icon" icon={['fab', 'github']} size="2x" />
                          <span className="button-label">GitHub</span>
                        </a>                
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}        
        </div>      
      </div>


    </div>
  )
}

PersonalProjects.propTypes = {
  background_image: PropTypes.string,
  title: PropTypes.string,
  personal_projects: PropTypes.shape({
    personal_projects_list: PropTypes.shape({
      project: PropTypes.shape({
        image: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        tech_list: PropTypes.shape({
          tech: PropTypes.arrayOf(PropTypes.string)
        })
      }),
    }),
  }),
}

export default PersonalProjects