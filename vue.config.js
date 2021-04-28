const deps = require('./package.json').dependencies
const PORT = 8081;

module.exports = {
  publicPath: `http://localhost:${PORT}/`,

  chainWebpack: (config) => {
    config.optimization.delete('splitChunks')
    /* module federation plugin import */
    config
      .plugin('module-federation-plugin')
      .use(require('webpack').container.ModuleFederationPlugin, [{
        name: "mfVueShell",
        filename: "remoteEntry.js",
        remotes: {
          mfUserList: 'mfUserList@http://localhost:8082/remoteEntry.js',
          // mfUserDetail: 'mfUserDetail@http://localhost:8083/remoteEntry.js',
        },
        exposes: {
          './Header': './src/components/Header.vue',
          './Footer': './src/components/Footer.vue'
        },
        shared: {
          "vue": {
            eager: true,
            singleton: true,
            requiredVersion: deps.vue,
          }
        },
    }])
  },

  devServer: {
    historyApiFallback: true,
    port: PORT,
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    }
  }
}