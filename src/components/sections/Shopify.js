import React from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Shopify = ({ icon, title, description, subsection_1_title, step_1_image, step_2_image, step_3_image, step_4_image, step_5_image, step_6_image, step_7_image, step_8_image, gridItems }) => {
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
              from a website (https://colorlib.com/wp/free-psd-ecommerce-templates/) after a Google search and created a new Shopify store in the Shopify admin.
            </p>          
          </div>
        </div>
        <div className="half">
          <img src={step_1_image} alt="step 1" />
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
          <img src={step_2_image} alt="step 2" />
        </div>
      </div>

      <div className="step">
        <div className="half">
          <div className="content">
            <p className="number">Step <span>3</span></p>
            <p className="description">
              <span className="step_name">Created new private app and setup API.</span>
              Set permissions of "Theme templates and theme assets" to 
              "Read and write access" to generate the API credentials.  
            </p>          
          </div>
        </div>
        <div className="half">
          <img src={step_3_image} alt="step 3" />
        </div>
      </div>

      <div className="step">
        <div className="half">
          <div className="content">
            <p className="number">Step <span>4</span></p>
            <p className="description">
              <span className="step_name">Setup Shopify theme locally</span>
              using ThemeKit within Powershell terminal and the theme's API credentials created in Step 3. 
              Also initialize a new GitHub repository with the theme code.
            </p>          
          </div>
        </div>
        <div className="half">
          <img src={step_4_image} alt="step 4" />
        </div>
      </div>

      <div className="step">
        <div className="half">
          <div className="content">
            <p className="number">Step <span>5</span></p>
            <p className="description">
              <span className="step_name">Edited theme elements and styles</span>
              to match the mockup as close to pixel perfect as possible while taking
              a mobile-first approach. Used ThemeKit with Visual Studio Code to customize
              the theme locally.
            </p>
          </div>
        </div>
        <div className="half">
          <img src={step_5_image} alt="step 5" />
        </div>
      </div>

      <div className="step">
        <div className="half">
          <div className="content">
            <p className="number">Step <span>6</span></p>
            <p className="description">
              <span className="step_name">Customized the content manager in the Admin</span>
              by creating and customizing Schemas in the code using Shopify's Liquid templating language.
            </p>
          </div>
        </div>
        <div className="half">
          <img src={step_6_image} alt="step 6" />
        </div>
      </div>

      <div className="step">
        <div className="half">
          <div className="content">
            <p className="number">Step <span>7</span></p>
            <p className="description">
              <span className="step_name">Installed the necessary plugins</span>
              from Shopify's App store and styled the plugin elements on the front end
              to match the mockup and the styles of the rest of the site.
              Tested the plugin functionality to make sure it works.
            </p>
          </div>
        </div>
        <div className="half">
          <img src={step_7_image} alt="step 7" />
        </div>
      </div>

      <div className="step">
        <div className="half">
          <div className="content">
            <p className="number">Step <span>8</span></p>
            <p className="description">
              <span className="step_name">Styled the elements on the other pages</span>
              to match styles on mockup so that styles across pages look consistent and uniform.
            </p>
          </div>
        </div>
        <div className="half">
          <img src={step_8_image} alt="step 8" />
        </div>
      </div>

      <h3>Themes</h3>
      <h2 className="disclaimer">Note: Shopify development stores are password-protected
        by default. The password for the themes would be the store name in the site's URL. For example, 
        the password for the Eyewear store would be 'eyecenter-store'.
      </h2>

      {gridItems.map(({ theme = {image: '', gif: '', title: '', tech_used: '', description: '', website_link: '', repo_link: '' } }, keys) => {
        return (
          <div key={keys} className="project_container" style={keys % 2 === 0 ? {flexDirection: 'row-reverse'} : {flexDirection: 'initial'}}>
            <div className="step project">
              <div className="half">
                <img src={theme.image} alt="fashion" />
                <img src={theme.gif} class="gif_image" alt="content_editor" />
              </div>
              <div className="half">
                <div className="content">
                  <div className="project_header">
                    <div className="title">{theme.title}</div>
                    <div className="tech_used"><span>Built with: </span>{theme.tech_used}</div>              
                  </div>
                  <div className="description">{theme.description}</div>
                  <div className="buttons_container">
                    <a href={theme.website_link}>
                      <button className="website_button">
                        <FontAwesomeIcon icon={'link'} size="2x" />
                        <div className="button_text">Website</div>
                      </button>
                    </a>
                    <a href={theme.repo_link}>
                      <button className="repo_button">
                        <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
                        <div className="button_text">GitHub</div>
                      </button>
                    </a>
                  </div>              
                </div>
              </div>
            </div>          
          </div>
        )
      })}

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
  step_7_image: PropTypes.string,
  step_8_image: PropTypes.string,
  shopify_themes: PropTypes.shape({
    shopify_themes_list: PropTypes.shape({
      theme: PropTypes.shape({
        image: PropTypes.string,
        gif: PropTypes.string,
        tech_used: PropTypes.string,
        description: PropTypes.string,
        website_link: PropTypes.string,
        repo_link: PropTypes.string,
        title: PropTypes.string,
      }),
    }),
  }),
}

export default Shopify