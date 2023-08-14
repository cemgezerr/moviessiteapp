/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images : {
      domains : ['image.tmdb.org', 'localhost', 'picsum.photos'] // <== Domain name
    }
  }
  
  module.exports = nextConfig
