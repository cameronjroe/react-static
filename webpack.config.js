var StaticSiteGeneratorPlugin = require('static-render-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var srcPath = path.join(__dirname, 'src');
var webpack = require('webpack');
var config = require('./config');

module.exports = {
  
  entry: path.join(srcPath, 'entry.js'),

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    libraryTarget: 'umd'
  },

  resolve: {
    root: srcPath,
    extensions: ['', '.js', '.jsx', '.scss'],
    modulesDirectories: ['node_modules', 'src']
  },

  module: {
    loaders: [
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('css?sourceMap!sass?sourceMap') },
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel?stage=0' },
      { test: /CNAME/, loader: 'file?name=CNAME' }
    ]
  },

  plugins: [
    new ExtractTextPlugin('style.css'),
    new StaticSiteGeneratorPlugin('bundle.js', config.routes, config)
  ],

  devServer: {
    contentBase: './dist',
    quiet: true
  }
  
};