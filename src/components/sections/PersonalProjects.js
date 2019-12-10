import React from 'react'
import PropTypes from 'prop-types'

import { Animated } from 'react-animated-css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const PersonalProjects = ({ personal_heading, tictactoe_screenshot, tictactoe_name, tictactoe_techItems, tictactoe_description, tictactoe_website_link, tictactoe_repo_link, simon_screenshot, simon_name, simon_techItems, simon_description, simon_website_link, simon_repo_link, pomodoro_screenshot, pomodoro_name, pomodoro_techItems, pomodoro_description, pomodoro_website_link, pomodoro_repo_link }) => (
  <div className="Projects-container" id="Projects">
    <Animated className="projects-animated" animationIn="fadeInDown" isVisible={true}>
        <h1 className="Projects-title">{personal_heading}</h1>
    </Animated>
    <div className="cards-container">
      <div className="cards-row">
        {/* Tic Tac Toe Project Card */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img className="project-img" src={tictactoe_screenshot} alt="Avatar" />
              <h3 className="projectName">{tictactoe_name}</h3>
              <p className="description">{tictactoe_description}</p>
              <FontAwesomeIcon className="arrow"  icon={faAngleRight} size="2x" /> 
            </div>
            <div className="flip-card-back">
                <h3 className="techList-title">Tech Used</h3>
                <ul>
                  {tictactoe_techItems.map(({ tictactoe_tech }, keys) => {
                    return (
                      <li key={keys} className='techListItem'>{tictactoe_tech}</li>
                    )
                  })}
                </ul>
                <div className="Card-Demo-button">
                    <a href={tictactoe_website_link} className="btn btn-white" target="_blank" rel="noopener noreferrer">Demo</a>                
                </div>
                <div className="Card-Repo-button">
                  <a href={tictactoe_repo_link} className="btn btn-white" target="_blank" rel="noopener noreferrer">Repo</a>                
                </div>
            </div>
          </div>
        </div>
        {/* Simon Game Project Card */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img className="project-img" src={simon_screenshot} alt="Avatar" />
              <h3 className="projectName">{simon_name}</h3>
              <p className="description">{simon_description}</p>
              <FontAwesomeIcon className="arrow"  icon={faAngleRight} size="2x" /> 
            </div>
            <div className="flip-card-back">
                <h3 className="techList-title">Tech Used</h3>
                <ul>
                  {simon_techItems.map(({ simon_tech }, keys) => {
                    return (
                      <li key={keys} className='techListItem'>{simon_tech}</li>
                    )
                  })}
                </ul>
                <div className="Card-Demo-button">
                    <a href={simon_website_link} className="btn btn-white" target="_blank" rel="noopener noreferrer">Demo</a>                
                </div>
                <div className="Card-Repo-button">
                  <a href={simon_repo_link} className="btn btn-white" target="_blank" rel="noopener noreferrer">Repo</a>                
                </div>
            </div>
          </div>
        </div>
        {/* Pomodoro Project Card */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img className="project-img" src={pomodoro_screenshot} alt="Avatar" />
              <h3 className="projectName">{pomodoro_name}</h3>
              <p className="description">{pomodoro_description}</p>
              <FontAwesomeIcon className="arrow"  icon={faAngleRight} size="2x" /> 
            </div>
            <div className="flip-card-back">
                <h3 className="techList-title">Tech Used</h3>
                <ul>
                  {pomodoro_techItems.map(({ pomodoro_tech }, keys) => {
                    return (
                      <li key={keys} className='techListItem'>{pomodoro_tech}</li>
                    )
                  })}
                </ul>
                <div className="Card-Demo-button">
                    <a href={pomodoro_website_link} className="btn btn-white" target="_blank" rel="noopener noreferrer">Demo</a>                
                </div>
                <div className="Card-Repo-button">
                  <a href={pomodoro_repo_link} className="btn btn-white" target="_blank" rel="noopener noreferrer">Repo</a>                
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

PersonalProjects.propTypes = {
  personal_heading: PropTypes.string,
  tictactoe_screenshot: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  tictactoe_name: PropTypes.string,
  tictactoe_description: PropTypes.string,
  tictactoe_techs: PropTypes.shape({
    tictactoe_tech: PropTypes.arrayOf(PropTypes.string)
  }),
  tictactoe_website_link: PropTypes.string,
  tictactoe_repo_link: PropTypes.string,

  simon_screenshot: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  simon_name: PropTypes.string,
  simon_description: PropTypes.string,
  simon_techs: PropTypes.shape({
    simon_tech: PropTypes.arrayOf(PropTypes.string)
  }),
  simon_website_link: PropTypes.string,
  simon_repo_link: PropTypes.string,

  pomodoro_screenshot: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  pomodoro_name: PropTypes.string,
  pomodoro_description: PropTypes.string,
  pomodoro_techs: PropTypes.shape({
    pomodoro_tech: PropTypes.arrayOf(PropTypes.string)
  }),
  pomodoro_website_link: PropTypes.string,
  pomodoro_repo_link: PropTypes.string,
}

export default PersonalProjects