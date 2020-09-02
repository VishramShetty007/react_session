const proxy = require('http-proxy-middleware');
const http = require('http');
var keepAliveAgent = new http.Agent({ keepAlive: true });
module.exports = function(app) {
  app.use(
    '/api',
    proxy({
      target: 'http://localhost:7000',
      changeOrigin: true,
      agent: keepAliveAgent,
      pathRewrite: {
        "^/api": "/",
    },
    })
  );
};
