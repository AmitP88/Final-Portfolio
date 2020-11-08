import React from 'react'
import PropTypes from 'prop-types'

const Shopify = ({ icon, title, description, subsection_1_title, step_1_image, step_2_image, step_3_image, step_4_image, step_5_image, step_6_image, step_7_image }) => {
  return (
    <div className="shopify" id="shopify">
      <div className="header">
        <img src={icon} alt="shopify_icon" />
        <h1>{title}</h1>      
      </div>
      <p className="section_description">{description}</p>
      <h3>{subsection_1_title}</h3>

      <div className="step">
        <div className="half">
          <div className="content">
            <p className="number">Step <span>1</span></p>
            <p className="description">
              <span className="step_name">Downloaded a PSD file</span>
              from a website and created a new Shopify store in the Shopify admin.
            </p>          
          </div>
        </div>
        <div className="half">
          <img src={step_1_image} alt="step 1 image" />
        </div>
      </div>

      <div className="step">
        <div className="half">
          <div className="content">
            <p className="number">Step <span>2</span></p>
            <p className="description">
              <span className="step_name">Downloaded a free Shopify theme</span>
              from the Shopify theme store that is similar in layout to the downloaded PSD mockup.
              The downloaded theme must be compatible with the online content editor accessible in
              the Shopify admin.
            </p>          
          </div>
        </div>
        <div className="half">
          <img src={step_2_image} alt="step 2 image" />
        </div>
      </div>

      <div className="step">
        <div className="half">
          <div className="content">
            <p className="number">Step <span>3</span></p>
            <p className="description">
              <span className="step_name">Setup Shopify theme locally</span>
              using ThemeKit and Powershell terminal and also initialize a new
              GitHub repository with the theme code.
            </p>          
          </div>
        </div>
        <div className="half">
          <img src={step_3_image} alt="step 3 image" />
        </div>
      </div>

      <div className="step">
        <div className="half">
          <div className="content">
            <p className="number">Step <span>4</span></p>
            <p className="description">
              <span className="step_name">Edit site elements and styles</span>
              to match the mockup as close to pixel perfect as possible while taking
              a mobile-first approach. Use ThemeKit with Visual Studio Code to customize
              the theme locally.
            </p>
          </div>
        </div>
        <div className="half">
          <img src={step_4_image} alt="step 4 image" />
        </div>
      </div>

      <div className="step">
        <div className="half">
          <div className="content">
            <p className="number">Step <span>5</span></p>
            <p className="description">
              <span className="step_name">Customize the content manager in the Admin</span>
              by creating and customizing Schemas in the code using Shopify's Liquid templating language.
            </p>
          </div>
        </div>
        <div className="half">
          <img src={step_5_image} alt="step 5 image" />
        </div>
      </div>

      <div className="step">
        <div className="half">
          <div className="content">
            <p className="number">Step <span>6</span></p>
            <p className="description">
              <span className="step_name">Install any necessary plugins</span>
              from Shopify's App store and style the plugin elements on the front end
              to match the mockup and the styles of the rest of the site.
              Test the plugin functionality to make sure it works.
            </p>
          </div>
        </div>
        <div className="half">
          <img src={step_6_image} alt="step 6 image" />
        </div>
      </div>

      <div className="step">
        <div className="half">
          <div className="content">
            <p className="number">Step <span>7</span></p>
            <p className="description">
              <span className="step_name">Style elements on other pages</span>
              to match styles on mockup so that styles across pages look consistent and uniform.
            </p>
          </div>
        </div>
        <div className="half">
          <img src={step_7_image} alt="step 7 image" />
        </div>
      </div>


    </div>
  )
}

Shopify.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  subsection_1_title: PropTypes.string,
  step_1_image: PropTypes.string,
  step_2_image: PropTypes.string,
  step_3_image: PropTypes.string,
  step_4_image: PropTypes.string,
  step_5_image: PropTypes.string,
  step_6_image: PropTypes.string,
  step_7_image: PropTypes.string
}

export default Shopify