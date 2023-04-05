const redirects = require("./redirects.config");

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  ...redirects,
};

module.exports = nextConfig;
