import React from 'react'
import PropTypes from 'prop-types'

const Testimonials = ({ ryan, tom }) => {
  return (
    <div className="testimonials">
      <div className="ryan">
        <img src={ryan.image} alt="ryan" />
        <p className="quote">{ryan.quote}</p>
        <div className="name_box">
          <h1 className="name">{ryan.name}</h1>    
          <h3 className="title">{ryan.title}</h3>      
        </div>
      </div>
      <div className="tom">
        <img src={tom.image} alt="tom" />
        <p className="quote">{tom.quote}</p>
        <div className="name_box">
          <h1 className="name">{tom.name}</h1>    
          <h3 className="title">{tom.title}</h3>      
        </div>
      </div>
    </div>
  )
}

Testimonials.propTypes = {
  ryan: PropTypes.shape({
    image: PropTypes.string,
    quote: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string
  }),
  tom: PropTypes.shape({
    image: PropTypes.string,
    quote: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string
  })
}

export default Testimonials