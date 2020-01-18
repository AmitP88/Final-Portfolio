import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../../src/components/Layout'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import message_received from '../../static/img/message_received.gif'

const Success = props => (
  <Layout>
    <Helmet>
      <title>Success Page</title>
      <meta name="description" content="Success Page" />
    </Helmet>

    <div className="success_container">
      <h1>Message received! I'll get back to you as soon as possible! :)</h1>
      <img src={message_received} alt="message_received" />
      <Link className="home_icon" to='/'>
        <FontAwesomeIcon icon={'arrow-left'} size="2x" />
      </Link>
      <h2>Back to Home</h2>
    </div>
  </Layout>
);

export default Success;