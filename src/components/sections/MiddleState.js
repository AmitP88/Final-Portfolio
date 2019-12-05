import React from 'react'
import PropTypes from 'prop-types'

const MiddleState = ({logo, mdst_heading}) => (
  <div className='MiddleState section'>
    <div className='heading'>
      <h1><img src={logo} alt="middlestate_logo" />{mdst_heading}</h1>
    </div>
  </div>
)

MiddleState.propTypes = {
  logo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  mdst_heading: PropTypes.string,
}

export default MiddleState