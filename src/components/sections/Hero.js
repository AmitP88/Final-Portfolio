import React from 'react'
import PropTypes from 'prop-types'

const Hero = ({ background_image, title, subtitle, skillItems }) => (
  <section className='Hero section' style={
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
    <div className='intro animate fadeInLeft one'>
      <h1 className='hero_title'>{title}</h1>
      <h3 className='hero_subtitle'>{subtitle}</h3>
      <fieldset className='skills_list_container'>
        <legend>Skills</legend>
        {skillItems.map(({ skill }, keys) => {
          return (
            <h4 key={keys} className='skill'>{skill}</h4>
          )
        })}
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