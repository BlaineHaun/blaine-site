module.exports = {
    siteMetadata: {
        title: "Text for browswer tab and title",
        siteUrl: "https://myStuff.com",
        description: "Much descript!",
        woof: "This is somethoinmg that I wanted",
        whatabout: {
            nested: {
                stuff: "stuff",
            },
        },
    },
    plugins: [
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: `${__dirname}/images`
            },
        },
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
    ]
}