import React from 'react'
import PropTypes from 'prop-types'

const PersonalProjects = ({ background_image, title }) => {
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
    </div>
  )
}

PersonalProjects.propTypes = {
  background_image: PropTypes.string,
  title: PropTypes.string
}

export default PersonalProjects