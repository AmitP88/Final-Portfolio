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
          <div key={keys} className="project_container" style={keys % 2 === 0 ? {flexDirection: 'row-reverse'} : {flexDirection: 'initial'}}>
            <div className="column-1" style={keys % 2 === 0 ? {clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%, 20% 0%)'} : {clipPath: 'polygon(0% 0%, 80% 0%, 100% 100%, 0% 100%, 0% 0%)'}}>
              <div className="col-1-background" style={
                {
                  background: `url(${project.image})`,
                  backgroundPosition: 'left',
                  backgroundSize: 'cover',
                  height: '100%'
                }
              }/>
              {/* <img src={project.image} alt="project_image" /> */}
            </div>
            <div className="column-2">
              <div className="col-2-content">
                <div className="project_header">
                  <div className="title">{project.title}</div>
                  <div className="tech_used"><span>Tech Used: </span>{project.tech_used}</div>              
                </div>
                <div className="description">{project.description}</div>
                <div className="buttons_container">
                  <a href={project.website_link}>
                    <button className="website_button">Website</button>
                  </a>
                  <a href={project.repo_link}>
                    <button className="repo_button">Repo</button>
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