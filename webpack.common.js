const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: isProd ? '[contentHash].js' : '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      }
    ]
  },
  plugins: [
    new HTMLPlugin({
      template: './src/index.html',
      inject: true,
      hash: true,
      cache: true
    })
  ]
}
