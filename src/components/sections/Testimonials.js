import React from 'react'
import PropTypes from 'prop-types'

const Testimonials = ({ ryan, tom }) => {
  return (
    <div className="testimonials">
      <div className="ryan">
        <div className="profile">
          <img src={ryan.image} alt="ryan" />
          <h1 className="name">{ryan.name}</h1>    
          <h3 className="title">{ryan.title}</h3>      
        </div>
        <p className="quote">{ryan.quote}</p>        
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
}

export default Testimonials