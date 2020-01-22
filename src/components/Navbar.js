import React from 'react'
import { Link } from 'gatsby'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <div className='logo-header-mobile'>
              <Link to='/#home'>
                <img src="/img/logo_transparent_background.png" alt="logo" />
              </Link>            
            </div>
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <ul
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <li className='logo-header'>
              <Link to='/#home'>
                <img src="/img/logo_transparent_background.png" alt="logo" />
              </Link>            
            </li>
            <li className="navItem_container">
              <div className='navItem' onClick={() => this.toggleHamburger()}>
                <Link to='/#home'>Home</Link>            
              </div>
              <div className='navItem' onClick={() => this.toggleHamburger()}>
                <Link to='/#middlestate'>MiddleState</Link>            
              </div>
              <div className='navItem' onClick={() => this.toggleHamburger()}>
                <Link to='/#messageme'>Message Me</Link>            
              </div>            
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar
