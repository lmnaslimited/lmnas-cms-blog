/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: "https://lmnas.com/blog",
    sitemapSize: 10000,
    additionalPaths: async (config) => {
      const result = [];
      result.push({
        loc: "/posts",
        changefreq: "daily",
        priority: 0.7,
        lastmod: new Date().toISOString(),
      });
      result.push({
        loc: "/category",
        changefreq: "daily",
        priority: 0.7,
        lastmod: new Date().toISOString(),
      });
      return result;
    },
    generateRobotsTxt: true,
  };
  
  