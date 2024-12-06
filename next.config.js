// next.config.js
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/truthify-web' : '',
  assetPrefix: isProd ? '/truthify-web' : '',
}
