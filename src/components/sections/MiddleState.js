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
  cd_screenshot,
  cd_name,
  cd_tech,
  cd_description,
  cd_website,
  cd_repo,
}) => (
  <div className='MiddleState section'>
    <h1 className='heading'><img src={logo} className='logo' alt='middlestate_logo' />{mdst_heading}</h1>
      <div className='grizzlyfest'>
        <div className='image_container' style={
          {
            background: `url(${gf_screenshot})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat'
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

      <div className='cellardoor'>
        <div className='image_container' style={
          {
            background: `url(${cd_screenshot})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat'
          }
        }>
        </div>
        <div className='project_content'>
          <h1>{cd_name}</h1>
          <h3>Tech Used: {cd_tech}</h3>
          <p>{cd_description}</p>
          <div className='buttons_container'>
            <a href={cd_website}>
              <button>Website</button>        
            </a>
            <a href={cd_repo}>
              <button>Github</button>        
            </a>        
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

  cd_screenshot: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  cd_name: PropTypes.string,
  cd_tech: PropTypes.string,
  cd_description: PropTypes.string,
  cd_website: PropTypes.string,
  cd_repo: PropTypes.string,
}

export default MiddleState