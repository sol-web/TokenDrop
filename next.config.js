/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'gateway.ipfscdn.io',
      'bafybeielsug7vj36exeez7izglzug3qguilw6ihpkbc3y2fu47ak2fjo34.ipfs.cf-ipfs.com',
    ],
  },
}

module.exports = nextConfig
