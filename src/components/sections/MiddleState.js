import React from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MiddleState = ({ icon, icon_link, title, description, gridItems }) => {
  return (
    <div className="middlestate" id="middlestate">
      <div className="header">
        <a href={icon_link}>
          <img src={icon} alt="middlestate_icon" />        
        </a>
        <h1>{title}</h1>
      </div>
      <p className="section_description">{description}</p>       
      {gridItems.map(({ project = {image: '', title: '', tech_used: '', description: '', website_link: '', repo_link: ''} }, keys) => {
        return (
          <div key={keys} className="project_container" style={keys % 2 === 0 ? {flexDirection: 'row-reverse'} : {flexDirection: 'initial'}}>
            <div className="column-1">
              <div className="col-1-background">
                <img src={project.image} alt="project_image" />
              </div>
            </div>
            <div className="column-2">
              <div className="col-2-content">
                <div className="project_header">
                  <div className="title">{project.title}</div>
                  <div className="business_type">{project.business_type}</div>
                  <div className="tech_used"><span>Built with: </span>{project.tech_used}</div>              
                </div>
                <div className="description">{project.description}</div>
                <div className="buttons_container">
                  <a href={project.website_link}>
                    <button className="website_button">
                      <FontAwesomeIcon icon={'link'} size="2x" />
                      <div className="button_text">Website</div>
                    </button>
                  </a>
                  <a href={project.repo_link}>
                    <button className="repo_button">
                      <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
                      <div className="button_text">GitHub</div>
                    </button>
                  </a>
                </div>              
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

MiddleState.propTypes = {
  icon: PropTypes.string,
  icon_link: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  mdst_projects: PropTypes.shape({
    mdst_projects_list: PropTypes.shape({
      project: PropTypes.shape({
        image: PropTypes.string,
        title: PropTypes.string,
        business_type: PropTypes.string,
        tech_used: PropTypes.string,
        description: PropTypes.string,
        website_link: PropTypes.string,
        repo_link: PropTypes.string,
      }),
    }),
  }),
}

export default MiddleState