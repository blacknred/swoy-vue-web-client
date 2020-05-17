const path = require("path");
const webpack = require("webpack"); // eslint-disable-line

module.exports = {
  // extended webpack-dev-server options
  devServer: {
    port: 8080,
    lazy: false, // TODO: not work properly
    https: false, // test pwa need selfsigned cert
    compress: true,
    // nginx proxy issue
    // public: 'myapp.test:80',
    contentBase: path.join(__dirname, "dist"),
    // Adds headers to all responses
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    // middleware
    before: function(/*app, server, compiler*/) {
      console.log(1);
      //   app.get("/some/path", function(req, res) {
      //     res.json({ custom: "response" });
      //   });
    },
    // XHR requests(not from browser) that did not match a static file go to:
    proxy: {
      "^/api": {
        target: "http://localhost:4000",
        secure: false,
        changeOrigin: true
      },
      "^/api2": {
        target: "http://localhost:4001",
        ws: true,
        changeOrigin: true
      }
    }
  },

  // PWA

  pwa: {},

  /* webpack sections */

  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src")
      }
    },
    plugins: []
  }
};
