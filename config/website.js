module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Christian Peterson', // Navigation and Site Title
  titleAlt: 'Christian Peterson', // Title for JSONLD
  description: 'A portfolio for Christian Peterson, a web developer.',
  headline: 'A portfolio for Christian Peterson', // Headline for schema.org JSONLD
  url: 'https://prismic.lekoarts.de', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  logo: '/logos/logo-1024.png', // Used for SEO
  ogLanguage: 'en_US', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/favicon.png', // Used for manifest favicon generation
  shortName: 'Christian', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Christian Peterson', // Author for schemaORGJSONLD
  themeColor: '#3D63AE',
  backgroundColor: '#EBEDF2',

  twitter: '@huntforth', // Twitter Username
  facebook: 'huntforth', // Facebook Site Name
  googleAnalyticsID: 'UA-47519312-7',

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
}
