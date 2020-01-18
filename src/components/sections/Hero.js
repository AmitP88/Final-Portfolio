import React from 'react'
import PropTypes from 'prop-types'

// Load method categories.
var array = require('lodash/array')

const Hero = ({ background_image, title, subtitle, skillItems }) => (
  <section className='Hero section' id="home" style={
    {
      background: `url(${background_image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'top center',
      position: 'relative'
    }
  }>
    <div className="layer" style={
      {
        background: 'linear-gradient(45deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 32%, rgba(0,212,255,1) 99%)',
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        opacity: '0.7'
      }
    }/>
    <div className='intro'>
      <h1 className='hero_title animate fadeInLeft one'>{title}</h1>
      <h3 className='hero_subtitle animate fadeInLeft two'>{subtitle}</h3>
      <fieldset className='skills_list_container animate fadeInLeft three'>
        <legend>Skills</legend>
        {
          (array.chunk(skillItems, 5)).map(skilledColumn => {
            return (
              <div className="skilledColumn">
                {
                  skilledColumn.map(({ skill }, keys) => {
                    return (
                      <p key={keys} className='skill'>{skill}</p>                      
                    )
                  })
                }
              </div>
            )
          })
        }
      </fieldset>
    </div>

  </section>
)

Hero.propTypes = {
  background_image: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  skills: PropTypes.shape({
    skill: PropTypes.arrayOf(PropTypes.string)
  })
}

export default Hero