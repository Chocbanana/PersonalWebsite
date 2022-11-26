module.exports = {
  siteMetadata: {
    title: `Bhav's Personal Website`,
    description: `My website for displaying all my projects and public work: 3D printing, LED wearables, traditional art, academic papers, AI research, and more!`,
    twitter: `https://twitter.com/justlurkingcoc1`,
    // siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
    linkedIn: `https://www.linkedin.com/in/bhavanajonn`,
    flickr: `https://www.flickr.com/photos/135898386@N03/albums`,
    github: `https://github.com/Chocbanana`,
  },

  plugins: [
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`, `avif`],
          quality: 95,
        },
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/triquetra.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
  ],
}
