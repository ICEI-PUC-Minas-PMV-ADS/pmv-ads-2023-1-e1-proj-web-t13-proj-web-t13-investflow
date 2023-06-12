const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'https://api.coingecko.com/api/v3',
      changeOrigin: true,
      pathRewrite: (path, req) => {
        // Extract the endpoint from the request URL
        const endpoint = path.split('/')[2];
        return `/${endpoint}`;
      },
    })
  );
};