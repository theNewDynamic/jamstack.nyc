module.exports = {
	siteMetadata: {
		title: "JAMstack.NYC"
	},
	plugins: [
		"gatsby-plugin-react-helmet",
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `src`,
				path: `${__dirname}/src/`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/posts/`,
				name: "posts"
      }
      
    },
    "gatsby-transformer-remark"
	]
};
