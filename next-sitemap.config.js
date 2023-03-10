/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://loopfilm.no',
  generateRobotsTxt: true, // (optional)
  // ...other options
}
