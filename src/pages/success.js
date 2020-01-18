import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../src/components/Layout'

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
    </div>
  </Layout>
);

export default Success;