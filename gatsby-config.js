module.exports = {
    siteMetadata: {
        title: `Color Splash - Kids`,
        description: `Coloring book app for kids - The website`,
        author: `@pavelkukov`,
    },
    plugins: [
        `gatsby-plugin-typescript`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `color-splash-kids`,
                short_name: `csk-website`,
                start_url: `/`,
                background_color: `#fd9900`,
                theme_color: `#fd9900`,
                display: `minimal-ui`,
                icon: `src/images/icon-512x512.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
