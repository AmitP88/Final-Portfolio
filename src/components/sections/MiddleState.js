import React from 'react'
import PropTypes from 'prop-types'

const MiddleState = ({ icon, title, gridItems }) => {
  return (
    <div className="middlestate">
      <div className="header">
        <img src={icon} alt="middlestate_icon" />
        <h1>{title}</h1>      
      </div>
      {gridItems.map(({ project = {image: '', title: '', tech_used: '', description: '', website_link: '', repo_link: ''} }, keys) => {
        return (
          <div key={keys} className="project_container">
            {console.log(project)}
            <div className="column-1">
              <img src={project.image} alt="project_image" />
            </div>
            <div className="column-2">
              <div className="project_header">
                <div className="title">{project.title}</div>
                <div className="tech_used"><span>Tech Used: </span>{project.tech_used}</div>              
              </div>
              <div className="description">{project.description}</div>
              <div className="buttons_container">
                <a href={project.website_link}>
                  <button>Website</button>
                </a>
                <a href={project.repo_link}>
                  <button>Repo</button>
                </a>
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
  title: PropTypes.string,
  mdst_projects: PropTypes.shape({
    mdst_projects_list: PropTypes.shape({
      project: PropTypes.shape({
        image: PropTypes.string,
        title: PropTypes.string,
        tech_used: PropTypes.string,
        description: PropTypes.string,
        website_link: PropTypes.string,
        repo_link: PropTypes.string,
      }),
    }),
  }),
}

export default MiddleState