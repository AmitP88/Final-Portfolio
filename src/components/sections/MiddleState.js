import React from 'react'
import PropTypes from 'prop-types'

const MiddleState = ({ gridItems }) => {
  return (
    <div className="middlestate">
      {gridItems.map(({ project }, keys) => {
        return (
          <div key={keys} className="project_container">
            {console.log(project)}
            <div className="column-1">
              <img src={project.image} alt="project_image" />
            </div>
            <div className="column-2">
              <div className="title">{project.title}</div>
              <div className="tech_used">{project.tech_used}</div>
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