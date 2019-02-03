import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Image from 'gatsby-image'

import style from './index.module.css'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Quotes from '../components/quotes-carousel'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title='Home' />
      <Quotes />
      <div className={style.ctaContainer}>
        <Link
          className={style.cta}
          data-button
          to='/method/'
        >
          <Image
            className={style.image}
            fluid={data.method.childImageSharp.fluid}
          />
          How does it work?
        </Link>
        <Link
          className={style.cta}
          data-button
          to='/teacher/'
        >
          <Image
            className={style.image}
            fluid={data.teacher.childImageSharp.fluid}
          />
          Who is the teacher?
        </Link>
        <Link
          className={style.cta}
          data-button
          to='/tuition/'
        >
          <Image
            className={style.image}
            fluid={data.tuition.childImageSharp.fluid}
          />
          How do I begin?
        </Link>
      </div>
    </Layout>

  )
}

export default IndexPage

IndexPage.propTypes = {
  data: PropTypes.shape({
    file: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.object.isRequired
      })
    })
  })
}

export const query = graphql`
  query {
    method: file(relativePath: { eq: "home__method.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1080) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    
    teacher: file(relativePath: { eq: "home__teacher.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1080) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    tuition: file(relativePath: { eq: "home__tuition.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1080) {
          ...GatsbyImageSharpFluid
        }
      }
    }

  }
`
