/** @type {import("next").NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  async redirects() {
    return [
      { source: '/privacy', destination: '/privacy-sms', permanent: true },
      { source: '/privacy-policy', destination: '/privacy-sms', permanent: true },
      { source: '/terms', destination: '/terms-sms', permanent: true },
      { source: '/terms-of-service', destination: '/terms-sms', permanent: true },
      { source: '/sms-terms', destination: '/terms-sms', permanent: true },
      // body1md.com's WordPress URLs, so links and rankings survive the cutover. The four
      // /services/<slug> URLs (internal-medicine, adult-physicals, prostate-screening,
      // chronic-disease-management) and /office exist as real pages and need no redirect.
      { source: '/home', destination: '/', permanent: true },
      { source: '/dr-andrew-hemmen', destination: '/team', permanent: true },
      { source: '/testimonials', destination: '/reviews', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/thank-you', destination: '/contact', permanent: true },
      { source: '/legal', destination: '/privacy-sms', permanent: true },
      { source: '/category/services', destination: '/services', permanent: true },
      { source: '/category/:slug/feed', destination: '/blog', permanent: true },
      { source: '/feed', destination: '/blog', permanent: true },
      { source: '/author/:slug', destination: '/team', permanent: true },
    ];
  },
};
module.exports = nextConfig;