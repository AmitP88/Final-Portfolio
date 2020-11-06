import React from 'react'
import PropTypes from 'prop-types'

const Shopify = ({ icon, title, description }) => {
  return (
    <div className="shopify" id="shopify">
      <div className="header">
        <img src={icon} alt="shopify_icon" />
        <h1>{title}</h1>      
      </div>
      <p className="section_description">{description}</p>
    </div>
  )
}

Shopify.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
}

export default Shopify