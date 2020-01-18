import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../src/components/Layout'

import message_received from '../../static/img/message_received.png'

const Success = props => (
  <Layout>
    <Helmet>
      <title>Success Page</title>
      <meta name="description" content="Success Page" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Message received! I will get back to you as soon as possible! :)</h1>
          </header>
          <span className="image main">
            <img src={message_received} alt="message_received" />
          </span>
          <p>Thank you for contacting us!</p>
        </div>
      </section>
    </div>
  </Layout>
);

export default Success;