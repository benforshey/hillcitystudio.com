module.exports = {
  siteMetadata: {
    author: `Susi Forshey`,
    siteUrl: `https://www.hillcitystudio.com`,
    description: `Suzuki Piano lessons in Lynchburg, VA.`,
    keywords: `Suzkui Piano, Piano Lessons, Learn to Play Piano`,
    lang: `en`,
    title: `Hill City Studio`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-85805713-4',
        head: false,
        anonymize: true,
        respectDNT: true,
        cookieDomain: 'https://www.hillcitystudio.com'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hill City Studio`,
        short_name: `Piano`,
        start_url: `/`,
        background_color: `#353122`,
        theme_color: `#C8AD55`,
        display: `minimal-ui`,
        icon: `src/images/icon.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`
  ]
}
