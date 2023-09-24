/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  images: {
    domains: ['www.themoviedb.org'], // Add any other domains as needed
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = nextConfig;
