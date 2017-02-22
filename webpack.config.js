'use strict'

var webpack = require('webpack')
var HtmlwebpackPlugin = require('html-webpack-plugin')
var path = require('path')
var appPath = path.join(__dirname, 'app')
var nodePath = path.join(__dirname, 'node_modules')

module.exports = {
  context: appPath,
  entry: {
    app: [
      './index.js'
    ]
  },
  output: {
    path: appPath,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader?presets[]=es2015',
        exclude: nodePath
      },
      {
        test: /\.scss/,
        exclude: nodePath,
        loader: 'sass-loader!style-loader!css'
      }
    ]
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080
  },
  plugins: [
    new HtmlwebpackPlugin()
  ]
}
