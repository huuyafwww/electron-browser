module.exports = {
    siteMetadata: {
        title: `Electron Sample Browser`,
        description: `This is Description`,
        author: `huuyafwww`,
    },
    plugins: [
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
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `standalone`,
                icon: `src/images/gatsby-icon.png`,
            },
        },
        {
            resolve: `gatsby-plugin-lodash`,
            options: {
                disabledFeatures: [`shorthands`, `cloning`],
            },
        },
        {
            resolve: `gatsby-alias-imports`,
            options: {
                alias: {
                    '@components': 'src/components',
                    '@images': 'src/images',
                    '@styles': 'src/styles',
                },
                extensions: ['js'],
            },
        },
        {
            resolve: `gatsby-plugin-offline`,
            options: {
                precachePages: [`/*`],
            },
        },
    ],
};
