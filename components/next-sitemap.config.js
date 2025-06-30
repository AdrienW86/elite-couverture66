/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.elitecouverture44.fr', 
  generateRobotsTxt: true, 
  sitemapSize: 5000, 
  changefreq: 'weekly', 
  priority: 0.7, 
  exclude: ['/admin/*'], 
};
