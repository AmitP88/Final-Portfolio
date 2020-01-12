import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = class extends React.Component {
  render() {
    return (
      <footer>
        <a href="#" className="footer-icon">
          <FontAwesomeIcon icon={['fab', 'github']} size="2x" />        
        </a>
        <a href="#" className="footer-icon">
          <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />        
        </a>
        <a href="#" className="footer-icon">
          <FontAwesomeIcon icon={'envelope-square'} size="2x" />        
        </a>
      </footer>
    )
  }
}

export default Footer
