module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My first gatsby site",
  },
  flags: {
    // DEV_SSR: false
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve:`gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
        ignore: [`**/.*`],
      }
    }
  ],
};
