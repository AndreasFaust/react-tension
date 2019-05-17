module.exports = {
  siteMetadata: {
    title: `React Tension`,
    siteUrl: `https://andreasfaust.github.io/react-tension/`,
    description: `Reveal Elements on Scroll with smooth tension-animation.`
  },
  pathPrefix: `/react-tension`,
  plugins: [
    'gatsby-plugin-layout',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: [
          'src/components',
          'src/layout',
          'src/tension'
        ]
      }
    }
  ]
}
