import React from 'react'
import PropTypes from 'prop-types'

const PersonalProjects = ({
  tictactoe_screenshot,
  tictactoe_name,
  tictactoe_tech_list,
  tictactoe_description,
  tictactoe_website_link,
  tictactoe_repo_link,
}) => (
  <div className="Projects-container" id="Projects">
  <Animated className="projects-animated" animationIn="fadeInDown" isVisible={true}>
      <h1 className="Projects-title">PROJECTS</h1>
  </Animated>
  <div className="cards-container">
      <div className="cards-row">
      </div>             
  </div>
</div>
)

export default PersonalProjects