module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "vivec-blog",
    menuLinks: [
      {
        name: "home",
        link: "/",
      },
    ],
  },
  plugins: [
    //This plugin exists only once but can consume an array of endpoints
    {
      resolve: "gatsby-source-rest-api",
      options: {
        endpoints: [
          "https://pa6bmhahhc.execute-api.ap-southeast-2.amazonaws.com/api/sermons",
          "https://jsonplaceholder.typicode.com/posts",
        ],
      },
    },
  ],
};
