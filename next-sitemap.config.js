/** @type {import('next-sitemap').IConfig} */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

const config = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: ['/404', '/studio*'],
      },
    ],
    additionalSitemaps: [
      `${SITE_URL}/sitemap-0.xml`,
      `${SITE_URL}/server-sitemap.xml`,
    ],
  },
};

module.exports = config;
