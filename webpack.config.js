var webpack = require('webpack')
var autoprefixer = require('autoprefixer')

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3120',
    './client/src/index.jsx'
  ],
  module: {
    loaders: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel'
    },
    {
      test: /\.css$/,
      loader: 'style!css!postcss'
    }
        ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.css']
  },
  output: {
    path: __dirname + '/client/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './client/dist'
  },
  postcss: function () {
    return [autoprefixer]
  }
}
