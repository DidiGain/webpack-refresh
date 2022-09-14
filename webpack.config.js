const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    port: 3002,
    open: true,
    hot: true, //reload
    compress: true, //enable gzip compression
    historyApiFallback: true, //index.html page will likely have to be served in place of any 404 responses
  }
}