import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header/header'
import Footer from './footer/footer'

import 'typeface-roboto'
import 'typeface-poppins'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Fragment>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Suzuki Piano instruction in Lynchburg, VA.' },
            { name: 'keywords', content: 'Suzkui Piano, Piano Lessons, Learn to Play Piano' }
          ]}
        >
          <html lang='en' />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className='content'>
          {children}
        </div>
        <Footer />
      </Fragment>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
