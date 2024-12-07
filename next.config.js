// next.config.js
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/factChcker-web' : '',
  assetPrefix: isProd ? '/factChecker-web' : '',
}
