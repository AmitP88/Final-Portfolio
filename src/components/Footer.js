import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = class extends React.Component {
  render() {
    return (
      <footer>
        <p className="built-with">Built with Netlify & Gatsby</p>
        <div className="icon-container">
          <a href="https://github.com/AmitP88" className="footer-icon">
            <FontAwesomeIcon icon={['fab', 'github']} size="2x" />        
          </a>
          <a href="https://www.linkedin.com/in/amit-patel-5a4240104?trk=nav_responsive_tab_profile" className="footer-icon">
            <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />        
          </a>
          <a href="mailto: amitpatel_7@msn.com" className="footer-icon">
            <FontAwesomeIcon icon={'envelope-square'} size="2x" />        
          </a>        
        </div>
        <p className="copyright">&copy; 2020 Amit </p>
      </footer>
    )
  }
}

export default Footer
