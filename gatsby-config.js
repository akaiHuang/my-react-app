module.exports = {
  siteMetadata: {
    title: 'Design+Code 3',
    description: 'Complete courses about the best tools and design systems. Prototype and build apps with React and Swift. 60 hours of video content and resource materials. No coding experience required.',
    keywords: 'react course, react for designers, ios development, sketch app, swift app course, arkit 2, after effects, create sketch plugin'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve:'gatsby-source-contentful',
      options:{
        spaceId:'06ar7n77410w',
        accessToken:'804msLnAcilGJJvD2qCxv_QVzWLTAJmpyL6jB27g0PM'
      }
  
  }
],
}