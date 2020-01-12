import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = class extends React.Component {
  render() {
    return (
      <footer>
        <p className="built-with">Built with</p>
        <div className="icon-container">
          <a href="#" className="footer-icon">
            <FontAwesomeIcon icon={['fab', 'github']} size="2x" />        
          </a>
          <a href="#" className="footer-icon">
            <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />        
          </a>
          <a href="#" className="footer-icon">
            <FontAwesomeIcon icon={'envelope-square'} size="2x" />        
          </a>        
        </div>
        <p className="copyright">&copy; 2020 Amit </p>
      </footer>
    )
  }
}

export default Footer
