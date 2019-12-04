import React from 'react'
import PropTypes from 'prop-types'

const Hero = ({ background_image, title, subtitle, skillItems }) => (
  <section className='Hero section' style={
    {
      background: `url(${background_image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center'
    }
  }>
    <div className='intro'>
      <h1 className='hero_title'>{title}</h1>
      <h3 className='hero_subtitle'>{subtitle}</h3>    
    </div>
    <div className='skills_list_container'>
      {skillItems.map(({ skill }, keys) => {
        return (
          <h4 key={keys} className='skill'>{skill}</h4>
        )
      })}
    </div>
  </section>
)

Hero.propTypes = {
  background_image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  skills: PropTypes.shape({
    skill: PropTypes.arrayOf(PropTypes.string)
  })
}

export default Hero