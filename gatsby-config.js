module.exports = {
  siteMetadata: {
    title: `Nick Gottschlich's Homepage`
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 590,
            linkImagesToOriginal: false,
            sizeByPixelDensity: true,
          }
        },
        'gatsby-remark-copy-linked-files'
      ]
    }
  }
  ]
}
