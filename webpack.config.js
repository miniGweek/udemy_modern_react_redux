var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  plugins: [
    new BrowserSyncPlugin(
      // BrowserSync options 
      {
        // browse to http://localhost:3000/ during development 
        host: 'localhost',
        port: 8080,
        // proxy the Webpack Dev Server endpoint 
        // (which should be serving on http://localhost:3100/) 
        // through BrowserSync 
        proxy: 'http://localhost:3100/'
      },
      // plugin options 
      {
        // prevent BrowserSync from reloading the page 
        // and let Webpack Dev Server take care of this 
        reload: false
      }
    )
  ]
};
