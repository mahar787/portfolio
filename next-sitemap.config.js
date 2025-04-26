/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.example.com", // Apni website ka URL do
  generateRobotsTxt: true, // robots.txt bhi generate karega
  sitemapSize: 7000, // (optional) agar bohot zyada pages hain
  changefreq: "monthly", // (optional) search engines ko batata hai page kitni frequently update hota hai
  priority: 0.7, // (optional) priority of URLs
};
