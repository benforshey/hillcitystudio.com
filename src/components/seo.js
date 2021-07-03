import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

function SEO ({ description, lang, meta = [], keywords = [], title }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription = description || data.site.siteMetadata.description
        const metaKeywords = keywords || data.site.siteMetadata.keywords
        const metaLang = lang || `en`
        const metaTitle = title || data.site.siteMetadata.title

        return (
          <Helmet
            htmlAttributes={{
              metaLang
            }}
            title={metaTitle}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: `description`,
                content: metaDescription
              },
              {
                property: `og:title`,
                content: metaTitle
              },
              {
                property: `og:description`,
                content: metaDescription
              },
              {
                property: `og:image`,
                content: `${data.site.siteMetadata.siteUrl}${data.social.publicURL}`
              },
              {
                property: `og:type`,
                content: `website`
              },
              {
                name: `twitter:card`,
                content: `summary`
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author
              },
              {
                name: `twitter:image`,
                content: `${data.site.siteMetadata.siteUrl}${data.social.publicURL}`
              },
              {
                name: `twitter:title`,
                content: metaTitle
              },
              {
                name: `twitter:description`,
                content: metaDescription
              }
            ]
              .concat(
                keywords.length > 0
                  ? {
                    name: `keywords`,
                    content: metaKeywords.join(`, `)
                  }
                  : []
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        author
        siteUrl
        description
        title
      }
    }

    social: file(relativePath: { eq: "social__default--square.jpg" }) {
      publicURL
    }
  }
`
