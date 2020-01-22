import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.sass'
import './fonts.css'
import useSiteMetadata from './SiteMetadata'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faLink, faAngleRight, faEnvelopeSquare, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faLink, faAngleRight, faEnvelopeSquare, faGithub, faLinkedin, faArrowLeft)

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="theme-color" content="#fff" />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.jpg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon-16x16.png" />
        <link rel="manifest" href="/img/site.webmanifest" />
      </Helmet>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
