import React from 'react'
import PropTypes from 'prop-types'

const Shopify = ({ icon, title }) => {
  return (
    <div className="shopify" id="shopify">
      <div className="header">
        <img src={icon} alt="shopify_icon" />
        <h1>{title}</h1>      
      </div>
    </div>
  )
}

Shopify.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string
}

export default Shopify