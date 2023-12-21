module.exports = {
  flags: {
    DEV_SSR: true,
  },

  siteMetadata: {
    title: `Bhav's Personal Website`,
    description: `My website for displaying all my projects and public work: 3D printing, LED wearables, traditional art, academic papers, AI research, and more!`,
    twitter: `https://twitter.com/justlurkingcoc1`,
    siteUrl: `https://chocbanana.github.io`,
    linkedIn: `https://www.linkedin.com/in/bhavanajonn`,
    flickr: `https://www.flickr.com/photos/135898386@N03/albums`,
    github: `https://github.com/Chocbanana`,
  },

  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-0XQTZPHQEJ", // Google Analytics / GA
          "GTM-K2NS377",
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          respectDNT: false,
          anonymize_ip: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`, `avif`],
          quality: 95,
          transformOptions: {
            fit: "inside",
          },
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
