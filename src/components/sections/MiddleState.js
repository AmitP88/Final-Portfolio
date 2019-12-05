import React from 'react'
import PropTypes from 'prop-types'

const MiddleState = ({
  logo,
  mdst_heading,
  gf_screenshot,
  gf_name,
  gf_tech,
  gf_description,
  gf_website,
  gf_repo,
}) => (
  <div className='MiddleState section'>
    <h1 className='heading'><img src={logo} className='logo' alt='middlestate_logo' />{mdst_heading}</h1>
    <div className='mdst_project'>
      <div className='grizzlyfest'>
        <div className='image_container' style={
          {
            background: `url(${gf_screenshot})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
          }
        }>
        </div>
        <div className='project_content'>
          <h1>{gf_name}</h1>
          <h3>Tech Used: {gf_tech}</h3>
          <p>{gf_description}</p>
          <div className='buttons_container'>
            <a href={gf_website}>
              <button>Website</button>        
            </a>
            <a href={gf_repo}>
              <button>Github</button>        
            </a>        
          </div>
        </div>
      </div>    
    </div>
  </div>
)

MiddleState.propTypes = {
  logo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  mdst_heading: PropTypes.string,
  gf_screenshot: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  gf_name: PropTypes.string,
  gf_tech: PropTypes.string,
  gf_description: PropTypes.string,
  gf_website: PropTypes.string,
  gf_repo: PropTypes.string,
}

export default MiddleState