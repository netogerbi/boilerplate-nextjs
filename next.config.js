/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPwa = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV !== 'production',
});

const nextConfig = {
  reactStrictMode: true,
};

module.exports = withPwa(nextConfig);
